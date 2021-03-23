import { Injectable } from '@nestjs/common';

// BL 처리

@Injectable()
export class AppService {
  getHello(): string {
    
    return 'hello!!';
  }
}
