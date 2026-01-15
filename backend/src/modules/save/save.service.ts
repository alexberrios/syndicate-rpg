import { Injectable } from '@nestjs/common';
import { SaveEngineService } from '../../engine/save-engine.service';
import { SaveExportDto } from './dto/save-export.dto';
import { SaveImportDto } from './dto/save-import.dto';

@Injectable()
export class SaveService {
  constructor(private readonly saveEngine: SaveEngineService) {}

  export(query: SaveExportDto) {
    return this.saveEngine.exportWorld(query.worldId);
  }

  import(dto: SaveImportDto) {
    return this.saveEngine.importWorld(dto.snapshot);
  }
}
