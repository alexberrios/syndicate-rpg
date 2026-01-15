import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { DatabaseModule } from './database/database.module';
import { EngineModule } from './engine/engine.module';
import { RedisModule } from './infra/redis.module';
import { LlmModule } from './llm/llm.module';
import { ActionModule } from './modules/action/action.module';
import { AuthModule } from './modules/auth/auth.module';
import { ContractModule } from './modules/contract/contract.module';
import { SaveModule } from './modules/save/save.module';
import { WorldModule } from './modules/world/world.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    DatabaseModule,
    EngineModule,
    RedisModule,
    LlmModule,
    AuthModule,
    WorldModule,
    ContractModule,
    ActionModule,
    SaveModule,
  ],
})
export class AppModule {}
