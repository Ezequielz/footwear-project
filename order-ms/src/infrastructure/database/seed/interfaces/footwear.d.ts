 export interface FootwearResponse {
    info:             Info;
    querySuggestions: any[];
    title:            string;
    products:         Footwear[];
    breadcrumbs:      Breadcrumb[];
    filters:          Filter[];
    sortRules:        SortRule[];
    selectedFilters:  SelectedFilter[];
}

export interface Footwear {
    id:               string;
    modelNumber:      string;
    title:            string;
    subTitle:         string;
    url:              string;
    image:            string;
    priceData:        PriceData;
    colourVariations: string[];
    rating?:          number;
    ratingCount:      number;
    hoverImage:       string;
    badge?:           Badge;
}

 interface Breadcrumb {
    text: string;
    link: string;
    type: FilternameEnum;
}

 enum FilternameEnum {
    Brand = "brand",
    Division = "division",
    GenderEsAr = "gender_es_ar",
    PriceMax = "price_max",
    PriceMin = "price_min",
    PriceSlider = "price_slider",
    ProducttypeEsAr = "producttype_es_ar",
    SalePercentageEsAr = "sale_percentage_es_ar",
    Searchcolor = "searchcolor",
    SportEsAr = "sport_es_ar",
    SportsubEsAr = "sportsub_es_ar",
}

 interface Filter {
    id:            string;
    filterRanking: number;
    hints:         string[];
    multiselect:   boolean;
    title:         string;
    filtername:    FilternameEnum;
    values:        Value[];
    visualization: string;
    display:       string;
    mobileDisplay: null | string;
    maxValues:     number | null;
    selected:      boolean;
}

 interface Value {
    displayName:       number | string;
    value:             number | string;
    count:             number;
    selected:          boolean;
    on:                FilternameEnum;
    filterRanking:     number;
    nonLocalizedValue: number | string;
    url?:              string;
}

 interface Info {
    viewSize:    number;
    viewSetSize: string;
    count:       number;
    startIndex:  number;
    currentSet:  number;
    collection:  any[];
    ranking:     Ranking[];
}

 interface Ranking {
    direction: string;
    attribute: string;
}

 interface Footwear {
    id:               string;
    modelNumber:      string;
    title:            string;
    subTitle:         string;
    url:              string;
    image:            string;
    priceData:        PriceData;
    colourVariations: string[];
    rating?:          number;
    ratingCount:      number;
    hoverImage:       string;
    badge?:           Badge;
}

 interface Badge {
    style: string;
    text:  string;
}

 interface PriceData {
    price:        number;
    salePrice:    number;
    discountText: DiscountText;
    prices:       Price[];
}

 enum DiscountText {
    The0 = "0%",
}

 interface Price {
    type:                PriceType;
    valueNoVat:          number;
    value:               number;
    discountPercentage?: number;
}

 enum PriceType {
    Original = "original",
    Sale = "sale",
}

 interface SelectedFilter {
    on:                FilternameEnum;
    displayName:       string;
    value:             string;
    nonLocalizedValue: string;
    url:               string;
}

 interface SortRule {
    ruleId:   string;
    selected: boolean;
    url:      string;
}
