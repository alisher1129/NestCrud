import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCompanyDTO {
  @IsNotEmpty()
  @IsString()
  name: string; 

  @IsNotEmpty()
  @IsString()
  description: string; 
}
