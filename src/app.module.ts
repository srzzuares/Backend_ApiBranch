import { Module } from '@nestjs/common';
import { BrandModule } from './brands/brand.module';

@Module({
  imports: [BrandModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
