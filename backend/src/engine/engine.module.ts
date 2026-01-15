import { Module } from '@nestjs/common';
import { ContractEngineService } from './contract-engine.service';
import { CorruptionEngineService } from './corruption-engine.service';
import { EconomyEngineService } from './economy-engine.service';
import { NPCMemoryService } from './npc-memory.service';
import { ReputationEngineService } from './reputation-engine.service';
import { SaveEngineService } from './save-engine.service';
import { WorldSimulatorService } from './world-simulator.service';

@Module({
  providers: [
    WorldSimulatorService,
    ContractEngineService,
    ReputationEngineService,
    CorruptionEngineService,
    EconomyEngineService,
    NPCMemoryService,
    SaveEngineService,
  ],
  exports: [
    WorldSimulatorService,
    ContractEngineService,
    ReputationEngineService,
    CorruptionEngineService,
    EconomyEngineService,
    NPCMemoryService,
    SaveEngineService,
  ],
})
export class EngineModule {}
