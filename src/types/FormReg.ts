export interface Assists {
    id?: number;
    name: string;
    email: string;
    contact: string;
    conditions: boolean;
}

export interface Inscription {
    id?: number;
    assist_id: number;
    free: boolean;
    speed: boolean;
    sex: string;
}
