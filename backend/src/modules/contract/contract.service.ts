import { Injectable } from '@nestjs/common';
import { ContractEngineService } from '../../engine/contract-engine.service';
import { ContractNextDto } from './dto/contract-next.dto';

@Injectable()
export class ContractService {
  constructor(private readonly contractEngine: ContractEngineService) {}

  next(dto: ContractNextDto) {
    return this.contractEngine.generateNextContract(dto.worldId, dto.characterId);
  }
}
