import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateLocationChildDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Name of the location child' })
  readonly name: string;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ description: 'Area of the location child' })
  readonly area: number;

  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ description: 'Location id of the location child' })
  readonly parentId: number;
}
