export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
}

export interface ContactNumber {
    id: number;
    country_code: string;
    number: string;
    primary: boolean;
}

export interface UserDetail {
    id: number;
    user: User;
    contact_number: ContactNumber;
    company_name: string;
    company_id: string;
}

export interface Response {
    token: string;
    user_detail: UserDetail;
}

export interface AuthorizeCustomerResponseModel {
    status: string;
    response: Response;
}