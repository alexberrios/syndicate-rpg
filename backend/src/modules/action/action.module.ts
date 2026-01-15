import { Module } from '@nestjs/common';
import { EngineModule } from '../../engine/engine.module';
import { LlmModule } from '../../llm/llm.module';
import { ActionController } from './action.controller';
import { ActionService } from './action.service';

@Module({
  imports: [EngineModule, LlmModule],
  controllers: [ActionController],
  providers: [ActionService],
})
export class ActionModule {}
