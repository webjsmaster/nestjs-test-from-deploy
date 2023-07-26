import { Module } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductsController } from './products.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductsEntity } from './entity/products.entity'

@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity])],
  providers: [ProductsService],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductsModule {}
