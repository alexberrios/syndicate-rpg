import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class WorldSimulatorService {
  private readonly logger = new Logger(WorldSimulatorService.name);

  constructor(private readonly prisma: PrismaService) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async runDailyTick() {
    const updated = await this.prisma.world.updateMany({
      data: {
        timeDay: { increment: 1 },
      },
    });
    this.logger.log(`Daily tick ejecutado en ${updated.count} mundos.`);
  }

  async advanceWorld(worldId: string, days = 1) {
    return this.prisma.world.update({
      where: { id: worldId },
      data: { timeDay: { increment: days } },
    });
  }
}
