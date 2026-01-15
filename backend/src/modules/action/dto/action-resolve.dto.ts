import { IsInt, IsObject, IsOptional, IsString, IsUUID } from 'class-validator';

export class ActionResolveDto {
  @IsUUID()
  worldId!: string;

  @IsUUID()
  characterId!: string;

  @IsString()
  actionType!: string;

  @IsOptional()
  @IsString()
  npcId?: string;

  @IsOptional()
  @IsObject()
  payload?: Record<string, any>;

  @IsOptional()
  @IsString()
  faction?: string;

  @IsOptional()
  @IsInt()
  reputationDelta?: number;

  @IsOptional()
  @IsString()
  corruptionSource?: string;

  @IsOptional()
  @IsInt()
  corruptionDelta?: number;
}
