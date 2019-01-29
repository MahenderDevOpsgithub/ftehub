export interface Self {
    href: string;
}

export interface Links {
    self: Self;
}

export interface Location {
    city: string;
    state: string;
    postal_code: string;
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
    _links: any;
}

export interface Embedded {
    job: Job;
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

export interface GetJobOrdersModel {
    count: number;
    total: number;
    _links: Links;
    _embedded: Embedded;
}
