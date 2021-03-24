import { Specification } from "../model/Specification";

interface ICreateSpecifitacionDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ICreateSpecifitacionDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecifitacionDTO };
