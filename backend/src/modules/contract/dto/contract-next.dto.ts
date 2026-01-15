import { IsUUID } from 'class-validator';

export class ContractNextDto {
  @IsUUID()
  worldId!: string;

  @IsUUID()
  characterId!: string;
}
