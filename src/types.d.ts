type IEvent = {
    title: string;
    description: string;
    address: string;
    date: string;
    latitude?: number;
    longitude?: number;
    user_id: number;
}

type ISession = {
    email: string;
    password: string;
}

type IUser = {
    first_name: string;
    last_name: string;
    email: string;
    address?: string;
    password: string; 
}