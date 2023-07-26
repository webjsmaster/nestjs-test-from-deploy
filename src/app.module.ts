import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  // imports: [
  // ProductsModule,
  // ConfigModule.forRoot({
  //   isGlobal: true,
  //   envFilePath: '.env',
  // }),
  //   TypeOrmModule.forRoot(typeOrmConfig),
  // ],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cj0dds18g3n9brsep2ug-a',
      port: Number(5432),
      username: 'webjsmaster',
      password: 'Co6T1Qel6fmkiGlRUaGrI0gNZkeGCNb9',
      database: 'db_x4wd',
      ssl: {
        rejectUnauthorized: false
      },
      entities: ['dist/**/entity/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get('dpg-cj0dds18g3n9brsep2ug-a'),
    //     port: configService.get('5432'),
    //     username: configService.get('webjsmaster'),
    //     password: configService.get('Co6T1Qel6fmkiGlRUaGrI0gNZkeGCNb9'),
    //     database: configService.get('db_x4wd'),
    //     synchronize: true,
    //     entities: ['dist/**/entity/*.entity{.ts,.js}'],
    //   }),
    //   inject: [ConfigService],
    // }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
