import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ContractEngineService {
  constructor(private readonly prisma: PrismaService) {}

  async generateNextContract(worldId: string, characterId: string) {
    const title = 'Encargo de reconocimiento';
    const description =
      'Explora las ruinas cercanas y reporta cualquier señal de corrupción arcana.';
    return this.prisma.contract.create({
      data: {
        worldId,
        characterId,
        title,
        description,
        rewards: { credits: 120, lootTable: ['fragmento_arcano'] },
        penalties: { corruption: 2 },
      },
    });
  }
}
