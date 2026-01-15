import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CorruptionEngineService } from '../../engine/corruption-engine.service';
import { ReputationEngineService } from '../../engine/reputation-engine.service';
import { NPCMemoryService } from '../../engine/npc-memory.service';
import { GameNarratorService } from '../../llm/game-narrator.service';
import { ActionResolveDto } from './dto/action-resolve.dto';

@Injectable()
export class ActionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly reputationEngine: ReputationEngineService,
    private readonly corruptionEngine: CorruptionEngineService,
    private readonly memoryService: NPCMemoryService,
    private readonly narrator: GameNarratorService,
  ) {}

  async resolve(dto: ActionResolveDto) {
    const world = await this.prisma.world.findUnique({ where: { id: dto.worldId } });
    const character = await this.prisma.character.findUnique({
      where: { id: dto.characterId },
    });
    if (!world || !character) {
      throw new NotFoundException('Mundo o personaje inválido.');
    }

    const narration = await this.narrator.narrate({
      world,
      character,
      action: dto,
    });

    if (dto.faction) {
      await this.reputationEngine.applyFactionReputation(
        dto.worldId,
        dto.characterId,
        dto.faction,
        dto.reputationDelta ?? 0,
      );
    }

    if (dto.corruptionSource) {
      await this.corruptionEngine.applyCorruption(
        dto.worldId,
        dto.characterId,
        dto.corruptionSource,
        dto.corruptionDelta ?? 0,
      );
    }

    if (dto.npcId) {
      await this.memoryService.rememberAction(dto.npcId, {
        actionType: dto.actionType,
        payload: dto.payload ?? {},
        timestamp: new Date().toISOString(),
      });
    }

    if (dto.actionType === 'death' || dto.payload?.isDeath) {
      await this.prisma.character.update({
        where: { id: dto.characterId },
        data: { isDead: true },
      });
    }

    await this.prisma.eventLog.create({
      data: {
        worldId: dto.worldId,
        characterId: dto.characterId,
        npcId: dto.npcId,
        type: dto.actionType,
        payload: dto.payload ?? {},
      },
    });

    return {
      narration,
      effectsApplied: {
        reputationDelta: dto.reputationDelta ?? 0,
        corruptionDelta: dto.corruptionDelta ?? 0,
      },
    };
  }
}
