import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateLocationParentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Name of the location parent' })
  readonly name: string;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ description: 'Area of the location parent' })
  readonly area: number;
}
