export interface Self {
    href: string;
}

export interface Links {
    self: Self;
}

export interface DataItem {
    id: number;
    type: string;
}

export interface Activity {
    id: number;
    data_item: DataItem;
    date: Date;
    regarding_id: number;
    regarding_job: string;
    type: string;
    notes?: any;
    annotation: string;
    entered_by_id: number;
    date_created: Date;
    date_modified: Date;
    _links: any;
}

export interface Embedded {
    activities: Activity[];
}

export interface GetActivitiesModel {
    count: number;
    total: number;
    _links: Links;
    _embedded: Embedded;
}