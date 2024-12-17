import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    const pid = process.pid;
    this.logger.log(`Handled by Worker ${pid}`);
    return `Hello World!`;
  }
}
