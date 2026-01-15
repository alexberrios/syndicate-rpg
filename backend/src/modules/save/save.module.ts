import { Module } from '@nestjs/common';
import { EngineModule } from '../../engine/engine.module';
import { SaveController } from './save.controller';
import { SaveService } from './save.service';

@Module({
  imports: [EngineModule],
  controllers: [SaveController],
  providers: [SaveService],
})
export class SaveModule {}
