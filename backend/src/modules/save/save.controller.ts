import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SaveService } from './save.service';
import { SaveExportDto } from './dto/save-export.dto';
import { SaveImportDto } from './dto/save-import.dto';

@Controller('save')
export class SaveController {
  constructor(private readonly saveService: SaveService) {}

  @Get('export')
  export(@Query() query: SaveExportDto) {
    return this.saveService.export(query);
  }

  @Post('import')
  import(@Body() dto: SaveImportDto) {
    return this.saveService.import(dto);
  }
}
