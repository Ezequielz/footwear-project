import type { FootwearEntity } from "../entities/footwear/footwear.entity";
import type { FootwearCreateDTO, FootwearUpdateDTO } from "../dtos/product/footwear.dto";

export interface FootwearDataSource {
  findAll(): Promise<FootwearEntity[] | null>;
  findById(id: string): Promise<FootwearEntity | null>;
  save(user: FootwearCreateDTO): Promise<FootwearEntity | null>;
  update(userUpdateDTO: FootwearUpdateDTO): Promise<FootwearEntity | null>;
  delete(id: string): Promise<FootwearEntity | null>;
}