export class Emails {
    public primary: string;
    public secondary: string;
}

export class Address {
    public street: string;
    public city: string;
    public state: string;
    public postal_code: string;
}

export class CustomField {
    public id: number;
    public value: string;
}

export class Location {
    public city: string;
    public state: string;
}

export class Employer {
    public linked: boolean;
    public name: string;
    public location: Location;
}

export class Supervisor {
    public linked: boolean;
    public name: string;
    public phone: string;
}

export class WorkHistory {
    public title: string;
    public employer: Employer;
    public supervisor: Supervisor;
    public is_verified: boolean;
    public is_current: string;
    public start_date: any;
    public end_date: any;
    public reason_for_leaving: string;
}

export class CandidateSignupModel {
    public first_name: string;
    public middle_name: string;
    public last_name: string;
    public title: string;
    public emails: Emails;
    public address: Address;
    public country_code: string;
    public social_media_urls: any[];
    public website: string;
    public best_time_to_call: string;
    public current_employer: string;
    public date_available: string;
    public current_pay: string;
    public desired_pay: string;
    public is_willing_to_relocate: boolean;
    public key_skills: string;
    public notes: string;
    public source: string;
    public owner_id: number;
    public is_active: boolean;
    public is_hot: boolean;
    public password: string;
    public custom_fields: CustomField[];
    public work_history: WorkHistory[];
}