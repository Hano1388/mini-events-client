type IEvent = {
    id: number;
    title: string;
    description: string;
    address: string;
    date: string;
    latitude?: number;
    longitude?: number;
    user_id: number;
}

type IUser = {
    id?: number;
    first_name?: string;
    last_name?: string;
    email: string;
    address?: string;
    latitude?: number;
    longitude?: number;
    password: string;
    is_admin?: boolean;
}