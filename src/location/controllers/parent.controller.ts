import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateLocationParentDto } from '../dtos/locationParent.dtos';
import { ParentService } from '../services/parent.service';

@ApiTags('location Parent')
@Controller('parent')
export class ParentController {
  constructor(private parentService: ParentService) {}

  @Get()
  finsAll() {
    return this.parentService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.parentService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateLocationParentDto) {
    return this.parentService.create(payload);
  }
}
