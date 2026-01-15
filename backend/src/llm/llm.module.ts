import { Module } from '@nestjs/common';
import { GameNarratorService } from './game-narrator.service';

@Module({
  providers: [GameNarratorService],
  exports: [GameNarratorService],
})
export class LlmModule {}
