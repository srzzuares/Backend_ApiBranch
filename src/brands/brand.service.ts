import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Brand } from '../../libs/entitys';
import { CreateBrandDto } from '../../libs/dtos/brands/create-brand.dto';

const now: Date = new Date();
@Injectable()
export class BrandService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'tp-link',
      createdBy: 'IdEmpleado',
      updatedBy: 'IdEmpleado',
      createdAt: now,
      isDeleted: false,
      deletedAt: undefined,
    },
  ];

  createBrand(createBrand: CreateBrandDto): Brand {
    const { name } = createBrand;
    const newBrand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdBy: 'IdEmpleado2',
      updatedBy: 'IdEmpleado2',
      createdAt: now,
      isDeleted: false,
      deletedAt: undefined,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  getOneByIdBrand(idBrand: string) {
    const findBrand: Brand = this.brands.find(
      (brand: Brand) => brand.id === idBrand,
    );
    if (!findBrand) return { message: `El id: ${idBrand} es incorrecto` };
    return findBrand;
  }
}
