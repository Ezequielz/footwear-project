


export interface FootwearEntity {
    id: string;
    title: string;
    description: string;
    gender: Gender;
    modelNumber:  string;
    slug: string;
    price: number;
    size: Size[];
    color: string;
    image: string;
    hoverImage: string;
    createdAt: Date;
    updatedAt: Date;
}

export enum Gender {
    Men = "MEN",
    Women = "WOMEN",
    Kid = "KID",
    Unisex = "UNISEX",

}

export enum AvailabilityStatus {
    InStock = "IN_STOCK",
    NotAvailable = "NOT_AVAILABLE",
}


interface Size {
    sku: string;
    stock: number;
    status: AvailabilityStatus;
    size: string;
}