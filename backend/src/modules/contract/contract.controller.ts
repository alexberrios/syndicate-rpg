import { Body, Controller, Post } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractNextDto } from './dto/contract-next.dto';

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post('next')
  nextContract(@Body() dto: ContractNextDto) {
    return this.contractService.next(dto);
  }
}
