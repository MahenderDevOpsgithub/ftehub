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

export interface Attachment {
    id: number;
    filename: string;
    is_resume: boolean;
    data_item: DataItem;
    _links: any;
}

export interface Embedded {
    attachments: Attachment[];
}

export interface GetCandidateResumesModel {
    count: number;
    total: number;
    _links: Links;
    _embedded: Embedded;
}
