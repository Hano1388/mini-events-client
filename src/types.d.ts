type IEvent = {
    id?: number;
    title: string;
    description: string;
    address?: string;
    date?: string;
    latitude: number;
    longitude: number;
    user_id: number;
    created_at?: string;
}

type INewEvent = {
    title: string;
    description: string;
    address?: string;
    date?: string;
    user_id: number;
}

type IUser = {
    id?: number | string;
    first_name?: string;
    last_name?: string;
    email: string;
    address?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    password: string;
    is_admin?: boolean;
}
