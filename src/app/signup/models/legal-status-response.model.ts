export interface Self {
    href: string;
}

export interface Definition {
    href: string;
}

export interface Links {
    self: Self;
    definition: Definition;
}

export interface Embedded {
    definition: Definition;
}

export interface LegalStatusResponse {
    id: number;
    value: string;
    _links: Links;
    _embedded: Embedded;
}