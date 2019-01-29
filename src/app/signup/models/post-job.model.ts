export class JobLocation {
    public city: string;
    public state: string;
    public postal_code: string;
}

export class CustomField {
    public id: number;
    public value: string;
}

export class PostJobModel {
    public title: string;
    public location: JobLocation;
    public country_code: string;
    public company_id: number;
    public department_id: number;
    public recruiter_id: number;
    public owner_id: number;
    public category_name: string;
    public is_hot: boolean;
    public start_date: any;
    public salary: string;
    public max_rate: string;
    public duration: string;
    public type: string;
    public openings: number;
    public external_id: string;
    public description: string;
    public notes: string;
    public contact_id: number;
    public workflow_id: number;
    public custom_fields: CustomField[];
}
