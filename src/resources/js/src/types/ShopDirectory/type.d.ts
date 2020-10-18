export interface FloorItem {
    id: number
    name: string
    created_at: string
    updated_at: string
}

export interface ZoneItem {
    id: number
    floor_id: number
    name: string
    description: string
    created_at: string
    updated_at: string
    floor?: FloorItem
}

export interface TenantItem {
    id: number
    name: string
    lot_number: string
    zone_id: number
    description: string
    logo_url?: null
    created_at: string
    updated_at: string
    laravel_through_key: number
    zone?: ZoneItem
}

export interface PaginateData<DateItem> {
    current_page: number
    data?: DateItem[] | null
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links?: LinksEntity[] | null
    next_page_url: string
    path: string
    per_page: number
    prev_page_url?: null
    to: number
    total: number
}

export interface LinksEntity {
    url?: string | null
    label: string | number
    active: boolean
}
