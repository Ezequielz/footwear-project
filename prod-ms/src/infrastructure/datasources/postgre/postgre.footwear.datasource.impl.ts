
import { prisma } from '../../database/postgresDB/prisma';
import { createFootwearEntityFromObject } from '../../../domain/entities/footwear/footwear.mapper';
import type { FootwearEntity } from '../../../domain/entities/footwear/footwear.entity';
import type { FootwearDataSource } from '../../../domain/datasources/footwear.datasource';
import type { FootwearUpdateDTO } from '../../../domain/dtos/product/footwear.dto';

export const postgreFootwearDataSource: FootwearDataSource = {
  async findAll() {
    const footwear = await prisma.footwear.findMany();
    return footwear.map(footwear => createFootwearEntityFromObject(footwear));
  },

  async findById(id: string) {
    const footwear = await prisma.footwear.findUnique({
        where: { id }
    });
    return footwear ?  createFootwearEntityFromObject(footwear) : null;
  },
  async save(footwear: FootwearEntity) {
    const newFootwear = await prisma.footwear.create({
        data: footwear
    })
    return createFootwearEntityFromObject(newFootwear);
  },

  async update(footwearUpdateDTO: FootwearUpdateDTO) {
    const footwearExist = await prisma.footwear.findUnique({
      where: { id: footwearUpdateDTO.id }
    });
    if (!footwearExist) return null;
    
    const updatedFootwear = await prisma.footwear.update({
      where: { id: footwearUpdateDTO.id },
      data: footwearUpdateDTO
    });

    return createFootwearEntityFromObject(updatedFootwear)
  },

  async delete(id: string) {
    const footweaerDeleted = await prisma.footwear.delete({
      where: { id }
    });
    return footweaerDeleted ? createFootwearEntityFromObject(footweaerDeleted) : null;
  }
};
