export interface Assists {
    id?: number;
    name: string;
    email: string;
    conditions: boolean;
}

export interface Inscription {
    id?: number;
    assist_id: number;
    contact: string;
    free: boolean;
    speed: boolean;
    sex: string;
}
