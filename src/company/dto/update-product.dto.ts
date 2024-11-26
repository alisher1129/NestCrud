import { IsOptional, IsString, IsNumber, Min } from 'class-validator';

export class UpdateProductDTO {
  @IsOptional() 
  @IsString()   
  name?: string;

  @IsOptional() 
  @IsNumber()
  @Min(0) 
  price?: number;

  @IsOptional() 
  @IsString()   
  description?: string;

  @IsOptional() 
  @IsNumber()   
  companyId?: number;
}
