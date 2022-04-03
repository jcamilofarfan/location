import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationParentDto } from '../dtos/locationParent.dtos';
import { LocationParent } from '../entities/locationParent.entity';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(LocationParent)
    private parentRepo: Repository<LocationParent>,
  ) {}

  findAll() {
    return this.parentRepo.find({
      relations: ['locationChildren'],
    });
  }

  async findOne(id: number) {
    const lParent = await this.parentRepo.findOne({
      relations: ['locationChildren'],
      where: { id },
    });
    if (!lParent) {
      throw new NotFoundException(`Location Parent with id ${id} not found`);
    }
    return lParent;
  }

  async findOneWithOutChildren(id: number) {
    const lParent = await this.parentRepo.findOne({
      where: { id },
    });
    if (!lParent) {
      throw new NotFoundException(`Location Parent with id ${id} not found`);
    }
    return lParent;
  }

  create(data: CreateLocationParentDto) {
    const newParent = this.parentRepo.create(data);
    return this.parentRepo.save(newParent);
  }
}
