export interface Self {
    href: string;
}

export interface Next {
    href: string;
}

export interface Last {
    href: string;
}

export interface Links {
    self: Self;
    next: Next;
    last: Last;
}

export interface Location {
    city: string;
    state: string;
    postal_code: string;
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
}

export interface Field {
    id: number;
    application_id: number;
    title: string;
    comment: string;
    position: number;
    type: string;
    size: string;
    answers: any[];
    is_required: boolean;
    min_items?: any;
    linked_custom_field_id?: any;
    saves_to_field: string;
    _links: any;
}

export interface Embedded {
    fields: Field[];
}

export interface Application {
    id: number;
    description: string;
    header: string;
    _links: any;
    _embedded: Embedded;
}

export interface Embedded {
    status: Status;
    company: Company;
    applications: Application[];
}

export interface Job {
    id: number;
    title: string;
    location: Location;
    country_code?: any;
    description: string;
    notes: string;
    recruiter_id: number;
    owner_id: number;
    category_name: string;
    is_hot: boolean;
    start_date?: any;
    salary: string;
    max_rate: string;
    duration: string;
    openings: number;
    external_id: string;
    company_id?: number;
    department_id?: any;
    contact_id?: any;
    status_id: number;
    pipeline_workflow_id: number;
    type: string;
    portal_hidden: boolean;
    is_published: boolean;
    date_created: Date;
    date_modified: Date;
    _links: any;
    _embedded: Embedded;
}

export interface Embedded {
    jobs: Job[];
}

export interface SearchJobsModel {
    count: number;
    total: number;
    _links: Links;
    _embedded: Embedded;
}