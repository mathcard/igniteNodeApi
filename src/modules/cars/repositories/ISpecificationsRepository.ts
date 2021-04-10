import { Specification } from "../entities/Specification";

interface ICreateSpecifitacionDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ICreateSpecifitacionDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository, ICreateSpecifitacionDTO };
