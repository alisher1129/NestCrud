import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  name: string; // Required and must be a string

  @IsNotEmpty()
  @IsNumber()
  @Min(0) // Price must be at least 0
  price: number;

  @IsNotEmpty()
  @IsString()
  description: string; // Required and must be a string

  @IsNotEmpty()
  @IsNumber()
  companyId: number; // Required and must be a valid company ID
}
