import { FootwearRepository } from '../../domain/repositories/footwear.repository';
import { createFootwearEntityFromObject } from '../../domain/entities/footwear/footwear.mapper';
import type { FootwearEntity } from '../../domain/entities/footwear/footwear.entity';
import type { FootwearDataSource } from '../../domain/datasources/footwear.datasource';
import type { FootwearUpdateDTO, FootwearCreateDTO } from '../../domain/dtos/product/footwear.dto';

export const FootwearRepositoryImpl: FootwearDataSource = {
    async findAll(): Promise<FootwearEntity[] | null> {
        const footwear = await FootwearRepository.findAll();
        return footwear ? footwear.map(footwear => createFootwearEntityFromObject(footwear)) : null;
    },
    async findById(id: string): Promise<FootwearEntity | null> {
        const footwear = await FootwearRepository.findById(id);
        return footwear ? createFootwearEntityFromObject(footwear) : null;
    },

    async delete(id: string): Promise<FootwearEntity> {
        const footwearDeleted = await FootwearRepository.delete(id);
        return createFootwearEntityFromObject(footwearDeleted)
    },
    async update(footwearUpdateDTO: FootwearUpdateDTO): Promise<FootwearEntity> {
        const userUpdated = await FootwearRepository.update(footwearUpdateDTO);
        return createFootwearEntityFromObject(userUpdated);
    },
    async save(footwearCreateDTO: FootwearCreateDTO): Promise<FootwearEntity> {
        const newUser = await FootwearRepository.save(footwearCreateDTO);
        return createFootwearEntityFromObject(newUser);
    }

};
