import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class KeepAliveController {
  @EventPattern('keep_alive')
  keepAlive() {
    // Do nothing, the keep alive is handled by the minecraft protocol library 
  }
}
