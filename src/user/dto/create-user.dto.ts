import { IsEmail, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProfileDto } from './create-profile.dto';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @ValidateNested()
  @Type(() => CreateProfileDto)
  profile: CreateProfileDto;
}
