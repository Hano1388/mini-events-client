import { baseUrl } from '../config';

export const Event = {
    // Fetch all Events from API
    all(): Promise<IEvent[]> {
        return fetch(`${baseUrl}/events`, {
            credentials: 'include',
        }).then(res => res.json())
    },

    // Fetch a signle event
    // Below id: any is a bad practise but, I should also change 
    // my backend to also accept strings for IDs or uuids
    // TODO: remove any for id
    one(id: any): Promise<IEvent> {
        return fetch(`${baseUrl}/events/${id}`, {
            credentials: 'include'
        }).then(res => res.json());
    },

    // Create an Event 
    create(params: INewEvent): Promise<number | Error> {
        return fetch(`${baseUrl}/events`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },

    // Edit an Event
    update(id: number, params: IEvent): Promise<number> {
        return fetch(`${baseUrl}/events/${id}`, {
            credentials: 'include',
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },

    // Delete an Event
    destroy(id: number): Promise<string> {
        return fetch(`${baseUrl}/events/${id}`, {
            credentials: 'include',
            method: 'DELETE'
        }).then(res => res.json());
    }
}