import { IsUUID } from 'class-validator';

export class SaveExportDto {
  @IsUUID()
  worldId!: string;
}
