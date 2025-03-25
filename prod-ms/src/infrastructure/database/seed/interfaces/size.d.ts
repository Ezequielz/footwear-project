export interface SizeResponse {
    id:                  string;
    availability_status: AvailabilityStatus;
    variation_list:      VariationList[];
}

export enum AvailabilityStatus {
    InStock = "IN_STOCK",
    NotAvailable = "NOT_AVAILABLE",
}

export interface VariationList {
    sku:                 string;
    availability:        number;
    availability_status: AvailabilityStatus;
    size:                string;
}
