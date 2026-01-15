import { IsOptional, IsString, IsUUID, IsInt, Min } from 'class-validator';

export class WorldCreateDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsUUID()
  ownerId?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  seed?: number;
}
