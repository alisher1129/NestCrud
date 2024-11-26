import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpException,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { UpdateCompanyDTO } from './dto/update-company.dto';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { SUCCESS_CODES, SUCCESS_MESSAGES } from 'src/utils/successConstants';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  // Company Endpoints
  @Post()
  createCompany(@Body() createCompanyDTO: CreateCompanyDTO) {
    try {
      this.companyService.createCompany(createCompanyDTO);
      return {
        status: SUCCESS_CODES.SUCCESS_CREATED,
        message: SUCCESS_MESSAGES.SUCCESS_CREATED,
        data: [],
      };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Get()
  findAllCompanies() {
    return this.companyService.findAllCompanies();
  }

  @Get(':id')
  findOneCompany(@Param('id') id: number) {
    return this.companyService.findOneCompany(id);
  }

  @Put(':id')
  updateCompany(
    @Param('id') id: number,
    @Body() updateCompanyDTO: UpdateCompanyDTO,
  ) {
    return this.companyService.updateCompany(id, updateCompanyDTO);
  }

  @Delete(':id')
  removeCompany(@Param('id') id: number) {
    return this.companyService.removeCompany(id);
  }

  // Product Endpoints
  @Post('/product')
  createProduct(@Body() createProductDTO: CreateProductDTO) {
    return this.companyService.createProduct(createProductDTO);
  }

  @Get('/get-product')
  async findAllProducts() {
    try {
      console.log('1');
      return await this.companyService.findAllProducts();
    } catch (error) {
      console.log('Here is error');
    }
  }

  @Get('/product/:id')
  findOneProduct(@Param('id') id: number) {
    return this.companyService.findOneProduct(id);
  }

  @Put('/product/:id')
  updateProduct(
    @Param('id') id: number,
    @Body() updateProductDTO: UpdateProductDTO,
  ) {
    return this.companyService.updateProduct(id, updateProductDTO);
  }

  @Delete('/product/:id')
  removeProduct(@Param('id') id: number) {
    return this.companyService.removeProduct(id);
  }
}
