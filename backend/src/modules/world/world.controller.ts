import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WorldService } from './world.service';
import { WorldCreateDto } from './dto/world-create.dto';

@Controller('world')
export class WorldController {
  constructor(private readonly worldService: WorldService) {}

  @Post('create')
  create(@Body() dto: WorldCreateDto) {
    return this.worldService.create(dto);
  }

  @Get(':id')
  getWorld(@Param('id') id: string) {
    return this.worldService.getById(id);
  }
}
