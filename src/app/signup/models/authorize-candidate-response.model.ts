export interface Emails {
    primary: string;
    secondary: string;
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

export interface Self {
    href: string;
}

export interface CustomFields {
    href: string;
}

export interface Attachments {
    href: string;
}

export interface Activities {
    href: string;
}

export interface WorkHistory {
    href: string;
}

export interface Pipelines {
    href: string;
}

export interface Tags {
    href: string;
}

export interface Thumbnail {
    href: string;
}

export interface EnteredBy {
    href: string;
}

export interface Links {
    self: Self;
    custom_fields: CustomFields;
    attachments: Attachments;
    activities: Activities;
    work_history: WorkHistory;
    pipelines: Pipelines;
    tags: Tags;
    thumbnail: Thumbnail;
    phones: any;
    entered_by: EnteredBy;
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

export interface Thumbnail {
    id: number;
    source: string;
    attachment_id?: any;
    url: string;
    _links: any;
}

export interface Embedded {
    custom_fields: CustomField[];
    thumbnail: Thumbnail[];
}

export interface AuthorizeCandidateResponseModel {
    id: number;
    first_name: string;
    middle_name?: any;
    last_name: string;
    title?: any;
    emails: Emails;
    address: Address;
    country_code: string;
    social_media_urls: any[];
    website: string;
    phones: Phones;
    best_time_to_call?: any;
    current_employer?: any;
    date_available: any;
    current_pay?: any;
    desired_pay?: any;
    is_willing_to_relocate: boolean;
    key_skills?: any;
    notes?: any;
    is_hot: boolean;
    is_active: boolean;
    contact_id?: any;
    owner_id?: any;
    entered_by_id: number;
    source?: any;
    is_registered: boolean;
    date_created: Date;
    date_modified: Date;
    _links: Links;
    _embedded: Embedded;
}
