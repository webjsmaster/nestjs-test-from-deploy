import { Body, Controller, Get, Post } from '@nestjs/common'
import { ProductsService } from './products.service'
import { CreateProductsDto } from './dto/create-products.dto'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll() {
    return this.productsService.getAll()
  }

  @Post()
  create(@Body() CreateProducts: CreateProductsDto) {
    return this.productsService.create(CreateProducts)
  }
}
