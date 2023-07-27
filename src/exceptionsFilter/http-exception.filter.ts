import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common'
import { HttpAdapterHost } from '@nestjs/core'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: HttpException, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost

    const ctx = host.switchToHttp()

    const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR

    let responseBody = {
      statusCode: httpStatus,
      error: exception.name,
      message: exception.message,
    }

    if (httpStatus === 500) {
      responseBody = {
        statusCode: httpStatus,
        error: exception.name,
        message: 'Something went wrong',
      }
    }

    console.log('⏰:', httpAdapter, this.httpAdapterHost)
    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus)
  }
}
