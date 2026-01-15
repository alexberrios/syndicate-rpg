import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class SaveEngineService {
  constructor(private readonly prisma: PrismaService) {}

  async exportWorld(worldId: string) {
    const world = await this.prisma.world.findUnique({
      where: { id: worldId },
      include: {
        characters: true,
        npcs: true,
        contracts: true,
        reputations: true,
        corruptions: true,
        inventoryItems: true,
        eventLogs: true,
      },
    });
    return world;
  }

  async importWorld(snapshot: Record<string, any>) {
    const { world, characters, npcs, contracts, reputations, corruptions, inventoryItems, eventLogs } =
      snapshot;
    if (!world) {
      throw new Error('Snapshot inválido: falta world.');
    }
    const createdWorld = await this.prisma.world.upsert({
      where: { id: world.id },
      update: { ...world },
      create: { ...world },
    });
    const upserts = [
      ...(characters ?? []).map((character: any) =>
        this.prisma.character.upsert({
          where: { id: character.id },
          update: { ...character },
          create: { ...character },
        }),
      ),
      ...(npcs ?? []).map((npc: any) =>
        this.prisma.nPC.upsert({
          where: { id: npc.id },
          update: { ...npc },
          create: { ...npc },
        }),
      ),
      ...(contracts ?? []).map((contract: any) =>
        this.prisma.contract.upsert({
          where: { id: contract.id },
          update: { ...contract },
          create: { ...contract },
        }),
      ),
      ...(reputations ?? []).map((rep: any) =>
        this.prisma.reputation.upsert({
          where: { id: rep.id },
          update: { ...rep },
          create: { ...rep },
        }),
      ),
      ...(corruptions ?? []).map((corr: any) =>
        this.prisma.corruption.upsert({
          where: { id: corr.id },
          update: { ...corr },
          create: { ...corr },
        }),
      ),
      ...(inventoryItems ?? []).map((item: any) =>
        this.prisma.inventoryItem.upsert({
          where: { id: item.id },
          update: { ...item },
          create: { ...item },
        }),
      ),
      ...(eventLogs ?? []).map((log: any) =>
        this.prisma.eventLog.upsert({
          where: { id: log.id },
          update: { ...log },
          create: { ...log },
        }),
      ),
    ];
    await this.prisma.$transaction(upserts);
    return createdWorld;
  }
}
