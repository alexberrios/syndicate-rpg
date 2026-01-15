import { Module } from '@nestjs/common';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';
import { EngineModule } from '../../engine/engine.module';

@Module({
  imports: [EngineModule],
  controllers: [ContractController],
  providers: [ContractService],
})
export class ContractModule {}
