import { IsOptional, IsString } from 'class-validator';

export class UpdateCompanyDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}