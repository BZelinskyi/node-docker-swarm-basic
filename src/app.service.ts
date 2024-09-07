import { Injectable } from '@nestjs/common';
import { InstanceId } from './main';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! from ${InstanceId}`;
  }
}
