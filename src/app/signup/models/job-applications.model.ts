export interface Self {
    href: string;
}

export interface Links {
    self: Self;
}

export interface Emails {
    primary: string;
    secondary?: any;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    postal_code: string;
}

export interface Phones {
    home?: any;
    cell?: any;
    work?: any;
}

export interface Field {
    type: string;
}

export interface Definition {
    id: number;
    data_item_type: string;
    name: string;
    comment?: any;
    field: Field;
    _links: any;
}

export interface Embedded {
    definition: Definition;
}

export interface CustomField {
    id: number;
    value?: any;
    _links: any;
    _embedded: Embedded;
}

export interface DataItem {
    id: number;
    type: number;
}

export interface Activity {
    id: number;
    data_item: DataItem;
    date: Date;
    regarding_id: number;
    type: string;
    notes?: any;
    annotation: string;
    entered_by_id: number;
    date_created: Date;
    date_modified: Date;
    _links: any;
}

export interface Attachment {
    id: number;
    filename: string;
    is_resume: boolean;
    data_item: any;
    _links: any;
}

export interface Embedded {
    custom_fields: CustomField[];
    activities: Activity[];
    attachments: Attachment[];
}

export interface Candidate {
    id: number;
    first_name: string;
    middle_name?: any;
    last_name: string;
    title?: any;
    emails: Emails;
    address: Address;
    country_code?: any;
    social_media_urls: any[];
    website?: any;
    phones: Phones;
    best_time_to_call?: any;
    current_employer?: any;
    date_available?: any;
    current_pay?: any;
    desired_pay?: any;
    is_willing_to_relocate?: any;
    key_skills?: any;
    notes?: any;
    is_hot: boolean;
    is_active: boolean;
    contact_id?: any;
    owner_id: number;
    entered_by_id: number;
    source: string;
    is_registered: boolean;
    date_created: Date;
    date_modified: Date;
    _links: any;
    _embedded: Embedded;
}

export interface Embedded {
    candidate: Candidate;
}

export interface Pipeline {
    id: number;
    candidate_id: number;
    job_id: number;
    rating: number;
    status_id: number;
    date_created: Date;
    date_modified: Date;
    _links: any;
    _embedded: Embedded;
}

export interface Embedded {
    pipelines: Pipeline[];
}

export interface JobApplicationsModel {
    count: number;
    total: number;
    _links: Links;
    _embedded: Embedded;
}