export interface Location {
    city: string;
    state: string;
    postal_code: string;
}

export interface Self {
    href: string;
}

export interface CustomFields {
    href: string;
}

export interface Company {
    href: string;
}

export interface Owner {
    href: string;
}

export interface Status {
    href: string;
}

export interface Recruiter {
    href: string;
}

export interface Attachments {
    href: string;
}

export interface Pipelines {
    href: string;
}

export interface Applications {
    href: string;
}

export interface Tags {
    href: string;
}

export interface Links {
    self: Self;
    custom_fields: CustomFields;
    company: Company;
    owner: Owner;
    status: Status;
    recruiter: Recruiter;
    attachments: Attachments;
    pipelines: Pipelines;
    applications: Applications;
    tags: Tags;
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
    status: any;
    company: any;
    applications: Application[];
}

export interface JobDetailsModel {
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
    is_hot_text: string;
    start_date?: any;
    salary: string;
    max_rate: string;
    duration: string;
    openings: number;
    external_id: string;
    company_id: number;
    department_id?: any;
    contact_id?: any;
    status_id: number;
    pipeline_workflow_id: number;
    type: string;
    portal_hidden: boolean;
    is_published: boolean;
    date_created: Date;
    date_modified: Date;
    _links: Links;
    _embedded: Embedded;
}