import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCagoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  // private categories: Category[];
  private repository: Repository<Category>;

  // private static INSTANCE: CategoriesRepository;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCagoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    /* const category = new Category();
    Object.assign(category, { name, description, created_at: new Date(),}); */

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    // const category = this.categories.find((category) => category.name === name);
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };
