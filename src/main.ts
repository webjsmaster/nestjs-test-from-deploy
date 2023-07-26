import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const port = +process.env.API_PORT || 80

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(port, () => {
    console.log('App started on', port, 'port')
  })
}

bootstrap()
