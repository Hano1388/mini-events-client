import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Spinner } from '../Spinner';
import { Event } from '../../api/event';


export const EventShowPage: React.FC<RouteComponentProps<{ id?: string; }>> = ({ match, history }) => {
    const [event, setEvent] = useState<IEvent | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const eventId = match.params.id;

    useEffect(() => {
        Event.one(eventId).then((event: IEvent) => {
            setEvent(event);
            setIsLoading(false);
        })
    }, [eventId]);

    if (isLoading) {
        return <Spinner message="Loading an Event..." />
    }
    return (
        <div className="ui clearing segment">

            <h2 className="ui header">{event?.title}</h2>
            <p>
                {event?.description} <br />
            </p>
            <small>
                {event?.created_at?.toLocaleString()}
            </small>
            {/* 
                Although I have logic for Authentication and Authorization for the back,
                Ideally checking the event's user with signed user to show or not this buttons 
            */}
            <button className="ui right floated red small button">Delete</button>
            <button className="ui right floated orange small button">Edit</button>
        </div>

    )


}