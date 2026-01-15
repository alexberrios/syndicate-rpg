import { Body, Controller, Post } from '@nestjs/common';
import { ActionService } from './action.service';
import { ActionResolveDto } from './dto/action-resolve.dto';

@Controller('action')
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @Post('resolve')
  resolve(@Body() dto: ActionResolveDto) {
    return this.actionService.resolve(dto);
  }
}
