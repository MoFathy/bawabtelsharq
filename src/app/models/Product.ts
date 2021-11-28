import { User } from "./User";

export interface Product {
    category: string
    category_id: string
    certificates: []
    color: string[]
    company: string
    company_details: any
    company_id: string
    company_profile: string[]
    country_image: string
    country_name: string
    detailed_pictures: string[]
    email: string
    faq: []
    full_description: string
    history_counter: string
    image_id: string
    image_path: string
    images: string[]
    max_qty: string
    min_qty: string
    number_reviews: string
    packing_shipping: []
    price: string
    product: string
    product_code: string
    product_id: string
    rate: string
    related_products: any[]
    rfq_category_id: string
    rfq_counter: string
    rocketUserName: string
    save: number
    saved_counter: number
    search_words: string
    short_description: string
    status: string
    supplier: string
    year: string
}