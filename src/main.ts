import { AbstractHttpAdapter, HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { JwtService } from '@nestjs/jwt'
import { AllExceptionsFilter } from './exceptionsFilter/http-exception.filter'

const port = +process.env.API_PORT || 80

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe()) // валидация
  app.enableCors()

  const reflector = app.get(Reflector)
  app.useGlobalGuards(new JwtAuthGuard(new JwtService(), reflector))
  // app.useGlobalFilters(new AllExceptionsFilter(new HttpAdapterHost<AbstractHttpAdapter>()))

  await app.listen(port)
}

bootstrap().then(() => {
  console.log('App started on', port, 'port')
})
