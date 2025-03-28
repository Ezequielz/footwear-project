import { FootwearEntity } from "../../entities/footwear/footwear.entity";
import { createFootwearEntityFromObject } from "../../entities/footwear/footwear.mapper";



export interface FootwearUpdateDTO extends Partial<FootwearEntity> {
    id: string;
};

export interface FootwearCreateDTO extends Omit<FootwearEntity, 'id'> { };


const filterEntityFields = <T extends Record<string, any>>(
    object: Record<string, any>, 
    entity: T
  ): T => {
    const result = {} as T;
  
    for (const key of Object.keys(object)) {
      if (key in entity) {
        result[key as keyof T] = object[key];
      }
    }

    return result;
  };

const create = (object: FootwearCreateDTO): [string?, FootwearCreateDTO?] => {

    const footwearEntity = createFootwearEntityFromObject(object);
    const filteredObject = filterEntityFields(object, footwearEntity);

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


const update = (object: FootwearUpdateDTO): [string?, FootwearUpdateDTO?] => {

    const footwearEntity = createFootwearEntityFromObject(object);

    const filteredObject = filterEntityFields(object, footwearEntity);
  
    return [undefined, { ...filteredObject, updatedAt: new Date() }];
  };

export const footwearDTO = {
    create,
    update,
};
