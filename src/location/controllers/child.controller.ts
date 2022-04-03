import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateLocationChildDto } from '../dtos/locationChild.dtos';
import { ChildService } from '../services/child.service';

@ApiTags('location Childs')
@Controller('child')
export class ChildController {
  constructor(private childService: ChildService) {}

  @Get()
  @ApiOperation({ summary: 'Get all childs Locations' })
  findAll() {
    return this.childService.findAll();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get child Location by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.childService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create child Location' })
  create(@Body() payload: CreateLocationChildDto) {
    return this.childService.create(payload);
  }
}
