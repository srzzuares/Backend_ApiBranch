import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
  @IsNotEmpty({ message: 'El campo Nombre esta vacio' })
  @IsString({ message: 'Debe ser de tipo string' })
  @MinLength(4, { message: 'Al menos debe contener 4 caracteres.' })
  name: '';
}
