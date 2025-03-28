


export interface FootwearEntity {
    id: string;
    title: string;
    description: string;
    gender: Gender;
    modelNumber:  string;
    slug: string;
    price: number;
    sizes: Size[];
    color: string;
    image: string;
    hoverImage: string;
    createdAt: Date;
    updatedAt: Date;
}

export enum Gender {
    MEN = "MEN",
    WOMEN = "WOMEN",
    KID = "KID",
    UNISEX = "UNISEX",

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