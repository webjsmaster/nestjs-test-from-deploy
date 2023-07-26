import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('products')
export class ProductsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column()
  price: number
}
