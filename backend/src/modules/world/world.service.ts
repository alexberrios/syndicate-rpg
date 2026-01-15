import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { WorldCreateDto } from './dto/world-create.dto';

@Injectable()
export class WorldService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: WorldCreateDto) {
    const seed = dto.seed ?? Math.floor(Math.random() * 1000000);
    return this.prisma.world.create({
      data: {
        name: dto.name,
        seed,
        ownerId: dto.ownerId,
      },
    });
  }

  async getById(id: string) {
    const world = await this.prisma.world.findUnique({
      where: { id },
      include: {
        characters: true,
        npcs: true,
        contracts: true,
      },
    });
    if (!world) {
      throw new NotFoundException('Mundo no encontrado.');
    }
    return world;
  }
}
