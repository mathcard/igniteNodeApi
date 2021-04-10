import { Category } from "../entities/Category";

interface ICreateCagoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCagoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCagoryDTO };
