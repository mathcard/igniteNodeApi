import { Category } from "../../model/Category";
import {
  ICategoriesRepository,
  ICreateCagoryDTO,
} from "../ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    // throw new Error("Method not implemented.");
    console.log(name);
    return null;
  }

  list(): Category[] {
    // throw new Error("Method not implemented.");
    return null;
  }

  create({ name, description }: ICreateCagoryDTO): void {
    // throw new Error("Method not implemented.");
    console.log(name, description);
  }
}

export { PostgresCategoriesRepository };
