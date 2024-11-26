import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { Product } from './entities/product.entity';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { UpdateCompanyDTO } from './dto/update-company.dto';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  // Company CRUD
  createCompany(createCompanyDTO: CreateCompanyDTO) {
    let createdCompany = this.companyRepository.create(createCompanyDTO);
    return this.companyRepository.save(createdCompany);
  }

  findAllCompanies() {
    return this.companyRepository.find({ relations: ['product'] });
  }

  findOneCompany(id: number) {
    return this.companyRepository.findOne({
      where: { id },
      relations: ['product'],
    });
  }

  async updateCompany(id: number, updateCompanyDTO: UpdateCompanyDTO) {
    await this.companyRepository.update(id, updateCompanyDTO);
    return this.findOneCompany(id);
  }

  async removeCompany(id: number) {
    const company = await this.findOneCompany(id);
    return this.companyRepository.remove(company);
  }

  async createProduct(createProductDTO: CreateProductDTO) {
    const { companyId, ...productData } = createProductDTO;

    const company = await this.companyRepository.findOne({
      where: { id: companyId },
    });

    if (!company) {
      throw new Error(`Company with ID ${companyId} not found.`);
    }

    const createdProduct = this.productRepository.create({
      ...productData,
      company,
    });

    return await this.productRepository.save(createdProduct);
  }

  findAllProducts() {
    console.log('first');
    return this.productRepository.find();
  }

  findOneProduct(id: number) {
    return this.productRepository.findOne({
      where: { id },
      relations: ['company'],
    });
  }

  async updateProduct(id: number, updateProductDTO: UpdateProductDTO) {
    await this.productRepository.update(id, updateProductDTO);
    return this.findOneProduct(id);
  }

  async removeProduct(id: number) {
    const product = await this.findOneProduct(id);
    return this.productRepository.remove(product);
  }
}
