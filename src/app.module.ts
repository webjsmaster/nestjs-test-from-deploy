import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { typeOrmConfig } from './typeorm.config'
import { ProductsModule } from './api/products/products.module'
import { UsersModule } from './api/users/users.module'
import { APP_FILTER, APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { AllExceptionsFilter } from './exceptionsFilter/http-exception.filter'
import { AuthModule } from './api/auth/auth.module'

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProductsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    // {
    //   provide: APP_FILTER,
    //   useClass: AllExceptionsFilter,
    // },
  ],
})
export class AppModule {}
