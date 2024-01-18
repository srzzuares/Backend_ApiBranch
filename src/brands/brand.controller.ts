import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from '../../libs/dtos/brands/create-brand.dto';
import { Brand } from '../../libs/entitys';
/* Clase controlador para peticiones Http */
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}
  /* Metodo Http Get */
  @Get()
  getAllBrands() {
    return this.brandService.getAllBrands();
  }
  /* Metodo Http Post */
  @Post()
  createBrand(@Body() createBrand: CreateBrandDto): Brand {
    return this.brandService.createBrand(createBrand);
  }
  /* Metodo Http Get por Id */
  @Get(':id')
  getOneByIdBrand(@Param('id') id: string) {
    return this.brandService.getOneByIdBrand(id);
  }
  /*Metodo Http Put o Patch por Id */
  /*Metodo Http Delete por Id */
}
