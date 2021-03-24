import { Category } from "../model/Category";

interface ICreateCagoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCagoryDTO): void;
}

export { ICategoriesRepository, ICreateCagoryDTO };
