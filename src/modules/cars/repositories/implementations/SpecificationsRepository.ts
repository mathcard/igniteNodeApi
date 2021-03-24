import { Specification } from "../../model/Specification";
import {
  ICreateSpecifitacionDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecifitaionsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ description, name }: ICreateSpecifitacionDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpecifitaionsRepository };
