import { IsObject } from 'class-validator';

export class SaveImportDto {
  @IsObject()
  snapshot!: Record<string, any>;
}
