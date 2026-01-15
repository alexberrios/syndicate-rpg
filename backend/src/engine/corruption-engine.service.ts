import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class CorruptionEngineService {
  constructor(private readonly prisma: PrismaService) {}

  async applyCorruption(
    worldId: string,
    characterId: string,
    source: string,
    delta: number,
  ) {
    const existing = await this.prisma.corruption.findFirst({
      where: { worldId, characterId, source },
    });
    if (existing) {
      return this.prisma.corruption.update({
        where: { id: existing.id },
        data: { value: { increment: delta } },
      });
    }
    return this.prisma.corruption.create({
      data: { worldId, characterId, source, value: delta },
    });
  }
}
