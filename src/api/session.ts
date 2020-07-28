import { baseUrl } from '../config';

export const Session = {
    // Create a session
    create(params: IUser): Promise<number | Error> {
        return fetch(`${baseUrl}/session`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },

    // Destroy a session
    destroy(): Promise<string> {
        return fetch(`${baseUrl}/session`, {
            credentials: 'include',
            method: 'DELETE'
        }).then(res => res.json());
    }
}