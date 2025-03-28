export interface DetailResponse {
    id:                                  string;
    product_type:                        string;
    base_model_number:                   string;
    model_number:                        string;
    name:                                string;
    meta_data:                           MetaData;
    view_list:                           ViewList[];
    dynamic_background_assets:           Asset[];
    confirmed_dynamic_background_assets: Asset[];
    product_listing_assets:              Asset[];
    attribute_list:                      AttributeList;
    breadcrumb_list:                     BreadcrumbList[];
    pricing_information:                 DetailResponsePricingInformation;
    price_information:                   PriceInformation[];
    tax_class_id:                        string;
    product_description:                 ProductDescription;
    recommendationsEnabled:              boolean;
    product_link_list:                   ProductLinkList[];
    variation_list:                      VariationList[];
    links:                               Links;
    pr_id:                               null;
}

export interface AttributeList {
    age:                       string[];
    sale:                      boolean;
    brand:                     string;
    color:                     string;
    colors:                    Colors;
    gender:                    string;
    outlet:                    boolean;
    sport:                     string[];
    closure:                   string[];
    surface:                   string[];
    category:                  string;
    size_page:                 string;
    sport_ids:                 string[];
    gender_sub:                string;
    sportSub:                  string[];
    category_id:               string[];
    closure_ids:               string[];
    productfit:                string[];
    surface_ids:               string[];
    weight_unit:               string;
    search_color:              string;
    base_material:             string[];
    productType:               string[];
    midsole_offset:            string;
    product_fit_ids:           string[];
    personalizable:            boolean;
    toe_stack_height:          string;
    base_material_ids:         string[];
    heel_stack_height:         string;
    isCnCRestricted:           boolean;
    key_category_code:         string;
    gift_wrapping_flag:        null;
    mandatory_personalization: boolean;
    customizable:              boolean;
    search_color_raw:          string;
    is_orderable:              boolean;
    isWaitingRoomProduct:      boolean;
    isInPreview:               boolean;
    specialLaunch:             boolean;
    special_launch_type:       string;
    sizeTypes:                 SizeTypes;
    is_flash:                  boolean;
    is_made_to_be_remade:      boolean;
    product_sizing_category:   string;
    size_chart_id:             string;
    size_chart_link:           string;
}

export interface Colors {
    color1code: string;
    color2code: string;
    color3code: string;
}

export interface SizeTypes {
}

export interface BreadcrumbList {
    text: string;
    link: string;
}

export interface Asset {
    type:               Type;
    source:             Source;
    image_url:          string;
    metadata:           ConfirmedDynamicBackgroundAssetMetadata;
    file_revision_date: Date;
}

export interface ConfirmedDynamicBackgroundAssetMetadata {
    asset_usage:    AssetUsage[];
    asset_category: AssetCategory;
    image_style:    ImageStyle;
    view:           string;
    usage_terms:    UsageTerms;
    sort_order:     string;
    subjects:       any[];
}

export enum AssetCategory {
    Photography = "Photography",
    Video = "Video",
}

export enum AssetUsage {
    PDP = "pdp",
    Plp = "plp",
}

export enum ImageStyle {
    Marketing = "Marketing",
    OnModel = "On Model",
    Standard = "Standard",
}

export enum UsageTerms {
    ECommerce = "eCommerce",
    ECommerceMarketing = "eCommerceMarketing",
}

export enum Source {
    Cloudinary = "CLOUDINARY",
}

export enum Type {
    Detail = "detail",
    Other = "other",
    Standard = "standard",
    Videoasset = "videoasset",
}

export interface Links {
    self: Self;
}

export interface Self {
    href: string;
}

export interface MetaData {
    canonical:   string;
    description: string;
    keywords:    string;
    page_title:  string;
    site_name:   string;
}

export interface PriceInformation {
    value:        number;
    value_no_vat: number;
    type:         string;
}

export interface DetailResponsePricingInformation {
    currentPrice:          number;
    standard_price:        number;
    standard_price_no_vat: number;
}

export interface ProductDescription {
    title:                  string;
    text:                   string;
    subtitle:               string;
    usps:                   string[];
    wash_care_instructions: WashCareInstructions;
    description_assets:     DescriptionAssets;
}

export interface DescriptionAssets {
    image_url:  string;
    video_url:  null;
    poster_url: null;
}

export interface WashCareInstructions {
    care_instructions: any[];
}

export interface ProductLinkList {
    type:                string;
    productId:           string;
    name:                string;
    url:                 string;
    image:               string;
    altImage:            string;
    pricing_information: ProductLinkListPricingInformation;
    search_color:        string;
    default_color:       string;
    team_kits:           any[];
    source:              Source;
}

export interface ProductLinkListPricingInformation {
    standard_price: number;
}

export interface VariationList {
    sku:  string;
    size: string;
}

export interface ViewList {
    type:               Type;
    source:             Source;
    image_url:          string;
    metadata:           ViewListMetadata;
    file_revision_date: Date;
    video_url?:         string;
}

export interface ViewListMetadata {
    asset_usage:    AssetUsage[];
    asset_category: AssetCategory;
    imageStyle:     ImageStyle;
    view:           string;
    usageTerms:     UsageTerms;
    sortOrder:      string;
    subjects:       any[];
}
