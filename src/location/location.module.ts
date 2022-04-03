import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ParentController } from './controllers/parent.controller';
import { ParentService } from './services/parent.service';
import { LocationParent } from './entities/locationParent.entity';

import { ChildController } from './controllers/child.controller';
import { ChildService } from './services/child.service';
import { LocationChild } from './entities/locationChild.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocationParent, LocationChild])],
  controllers: [ChildController, ParentController],
  providers: [ParentService, ChildService],
  exports: [],
})
export class LocationModule {}
