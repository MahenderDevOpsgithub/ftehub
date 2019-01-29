export interface Self {
    href: string;
}

export interface Links {
    self: Self;
}

export interface Address {
    street?: any;
    city?: any;
    state?: any;
    postal_code?: any;
}

export interface Phones {
    primary?: any;
    secondary?: any;
    fax?: any;
}

export interface Status {
    id: number;
    workflow_id: number;
    title: string;
    mapping: string;
    prerequisites: any[];
    triggers: any[];
    _links: any;
}

export interface Thumbnail {
    id: number;
    source: string;
    attachment_id?: any;
    url: string;
    _links: any;
}

export interface Embedded {
    status: Status;
    thumbnail: Thumbnail[];
}

export interface Company {
    id: number;
    owner_id: number;
    name: string;
    website?: any;
    address: Address;
    country_code?: any;
    phones: Phones;
    entered_by_id: number;
    social_media_urls: any[];
    notes: string;
    is_hot: boolean;
    key_technologies?: any;
    billing_contact_id?: any;
    date_created: Date;
    date_modified: Date;
    status_id: number;
    _links: any;
    _embedded: Embedded;
}

export interface Embedded {
    companies: Company[];
}

export interface GetCompaniesModel {
    count: number;
    total: number;
    _links: Links;
    _embedded: Embedded;
}