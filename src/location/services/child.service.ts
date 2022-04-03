import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationChildDto } from '../dtos/locationChild.dtos';
import { LocationChild } from '../entities/locationChild.entity';
import { ParentService } from './parent.service';

@Injectable()
export class ChildService {
  constructor(
    @InjectRepository(LocationChild)
    private childRepo: Repository<LocationChild>,
    private parentService: ParentService,
  ) {}

  findAll() {
    return this.childRepo.find();
  }

  findOne(id: number) {
    const lChild = this.childRepo.findOne({
      relations: ['locationParent'],
      where: { id },
    });
    if (!lChild) {
      throw new NotFoundException(`Location Child with id ${id} not found`);
    }
    return lChild;
  }

  async create(data: CreateLocationChildDto) {
    const newChild = this.childRepo.create(data);
    if (data.parentId) {
      const parent = await this.parentService.findOne(data.parentId);
      newChild.locationParent = parent;
    }
    return this.childRepo.save(newChild);
  }
}
