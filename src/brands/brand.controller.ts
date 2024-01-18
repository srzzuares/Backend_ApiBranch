import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from '../../libs/dtos/brands/create-brand.dto';
import { Brand } from '../../libs/entitys';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  createBrand(@Body() createBrand: CreateBrandDto): Brand {
    return this.brandService.createBrand(createBrand);
  }
  @Get(':id')
  getOneByIdBrand(@Param('id') id: string) {
    return this.brandService.getOneByIdBrand(id);
  }
}
