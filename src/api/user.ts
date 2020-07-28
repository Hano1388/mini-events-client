import { baseUrl } from "../config";

export const User = {
    create(params: IUser): Promise<number> {
        return fetch(`${baseUrl}/users`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },

    current(): Promise<IUser> {
        return fetch(`${baseUrl}/users/current`, {
            credentials: "include",
            method: "GET"
        }).then(res => res.json());
    },
};