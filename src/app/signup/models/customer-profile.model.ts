export interface ContactNumber {
    primary: boolean;
    id: number;
    country_code: string;
    number: string;
}

export interface ContactEmail {
    verified: boolean;
    id: number;
    email: string;
}

export interface User {
    username: string;
    first_name: string;
    last_name: string;
    id: number;
}

export interface Response {
    contact_number: ContactNumber;
    company_name: string;
    company_id: string;
    contact_email: ContactEmail;
    user: User;
    last_login: string;
    date_joined: string;
}

export interface CustomerProfileResponseModel {
    status: string;
    response: Response;
}