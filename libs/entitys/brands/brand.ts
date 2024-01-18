export class Brand {
  id: string;
  name: string;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt?: Date;
  isDeleted: boolean;
  deletedAt?: Date;

  constructor(
    id: string,
    name: string,
    createdBy: string,
    updatedBy: string,
    createdAt: Date,
    updatedAt: Date,
    isDeleted: boolean,
    deletedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isDeleted = isDeleted;
    this.deletedAt = deletedAt;
  }
}
