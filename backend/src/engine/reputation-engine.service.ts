import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ReputationEngineService {
  constructor(private readonly prisma: PrismaService) {}

  async applyFactionReputation(
    worldId: string,
    characterId: string,
    faction: string,
    delta: number,
  ) {
    const existing = await this.prisma.reputation.findFirst({
      where: { worldId, characterId, faction },
    });
    if (existing) {
      return this.prisma.reputation.update({
        where: { id: existing.id },
        data: { value: { increment: delta } },
      });
    }
    return this.prisma.reputation.create({
      data: { worldId, characterId, faction, value: delta },
    });
  }
}
