import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Brand } from '../../libs/entitys';
import { CreateBrandDto, UpdateBrandDto } from '../../libs/dtos';

const now: Date = new Date();
/* Servicio de lógica de negocios */
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
  /* Obtener todos los Brands */
  getAllBrands() {
    return this.brands;
  }
  /* Crear solo un Brand */
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
  /*Obtener un Brand por Id*/
  getOneByIdBrand(idBrand: string) {
    const findBrand: Brand = this.brands.find(
      (brand: Brand) => brand.id === idBrand,
    );
    if (!findBrand) return { message: `El id: ${idBrand} es incorrecto` };
    return findBrand;
  }
  /* Actualiza un atributo de brand */
  patchOneByIdBrand(idBrand: string, payload: UpdateBrandDto) {
    const findBrand: Brand = this.brands.find(
      (brand: Brand) => brand.id === idBrand,
    );
    if (!findBrand) return { message: `El id: ${idBrand} es incorrecto` };
    findBrand.name = payload.name;
    findBrand.updatedAt = now;
    return findBrand;
  }
  /* Elimina un atributo de brand */
  deleteOneByIdBrand(idBrand: string) {
    const findBrand: Brand = this.brands.find(
      (brand: Brand) => brand.id === idBrand,
    );
    if (!findBrand) return { message: `El id: ${idBrand} es incorrecto` };
    findBrand.updatedAt = now;
    findBrand.isDeleted = true;
    findBrand.deletedAt = now;
    return { message: `El id: ${idBrand} ha sido eliminado` };
  }
}
