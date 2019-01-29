export class Field {
    id: number;
    value: string;
    filename: string;

    constructor(id: number, value: string, filename?: string) {
        this.id = id;
        this.value = value;
        this.filename = filename;
    }
}

export class ApplyJobModel {
    fields: Field[];
    source: string;

    constructor(fields: Field[], source: string) {
        this.fields = fields;
        this.source = source;
    }
}
