import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService], // 공급자는 기본적으로 캡슐화되어있다 외부에서 쓰려고하면 export를 해주어야 한다.
})
export class CatsModule {}
