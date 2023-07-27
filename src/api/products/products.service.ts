import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ProductsEntity } from './entity/products.entity'
import { Repository } from 'typeorm'
import { CreateProductsDto } from './dto/create-products.dto'

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productsRepository: Repository<ProductsEntity>,
  ) {}

  async getAll(): Promise<ProductsEntity[]> {
    return await this.productsRepository.find()
  }

  async create(productInput: CreateProductsDto): Promise<ProductsEntity> {
    return await this.productsRepository.save({ ...productInput })
  }
}
