import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class NPCMemoryService {
  constructor(private readonly prisma: PrismaService) {}

  async rememberAction(npcId: string, memoryEntry: Record<string, unknown>) {
    const npc = await this.prisma.nPC.findUnique({ where: { id: npcId } });
    if (!npc) {
      return null;
    }
    const memory = Array.isArray(npc.memory) ? npc.memory : [npc.memory];
    const updated = [...memory, memoryEntry].slice(-50);
    return this.prisma.nPC.update({
      where: { id: npcId },
      data: { memory: updated },
    });
  }
}
