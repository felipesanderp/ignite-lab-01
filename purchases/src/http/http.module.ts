import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TestController } from 'src/test/test.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TestController],
})
export class HttpModule { }
