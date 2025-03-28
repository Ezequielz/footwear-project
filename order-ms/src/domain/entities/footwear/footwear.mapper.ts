import { FootwearEntity } from './footwear.entity';

export const createFootwearEntityFromObject = (obj: any): FootwearEntity => ({
    id: obj.id || obj._id,
    color: obj.color,
    description: obj.description,
    gender: obj.gender,
    hoverImage: obj.hoverImage,
    image: obj.image,
    price: obj.price,
    sizes: obj.sizes,
    modelNumber: obj.modelNumber,
    slug: obj.slug,
    title: obj.title,
    createdAt: obj.createdAt,
    updatedAt: obj.updatedAt,
});



export const footwearEntitytoObject = (footwear: FootwearEntity) => ({ ...footwear });
