import { FootwearEntity } from "../../entities/footwear/footwear.entity";



export interface FootwearUpdateDTO extends Partial<FootwearEntity> {
    id: string;
};

export interface FootwearCreateDTO extends Omit<FootwearEntity, 'id'> { };

const filterEntityFields = <T extends Record<string, any>>(object: Record<string, any>, entity: T): T => {
    return Object.keys(entity).reduce((acc, key) => {
        if (key in object) {
            acc[key as keyof T] = object[key];
        }
        return acc;
    }, {} as T);
};

const create = ( object: FootwearCreateDTO ): [string?, FootwearCreateDTO?] => {
    const filteredObject = filterEntityFields(object, {} as FootwearCreateDTO);

    const missingFields = Object.keys({} as FootwearCreateDTO).filter(key => !(key in filteredObject));
    if (missingFields.length > 0) {
        return [`Faltan los siguientes campos: ${missingFields.join(", ")}`];
    }

    return [undefined,
        {
            ...filteredObject,
            createdAt: new Date(),
            updatedAt: new Date(),
        }];
};


const update = ( object : FootwearUpdateDTO): [string?, FootwearUpdateDTO?] => {

    const filteredObject = filterEntityFields(object, {} as FootwearUpdateDTO);

    return [undefined, { ...filteredObject, updatedAt: new Date() }];
};


export const footwearDTO = {
    create,
    update,
};
