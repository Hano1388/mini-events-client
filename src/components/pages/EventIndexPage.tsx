import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Event } from '../../api/event';
import { EventsMap } from '../EventsMap';
interface IEventIndex {
    events: IEvent[] | [];
    isLoading: boolean;
}

export const EventIndexPage: React.FC<RouteComponentProps<{}>> = () => {
    const [eventIndex, setEventIndex] = useState<IEventIndex>({ events: [], isLoading: true });

    useEffect(() => {
        Event.all().then(events => {
            setEventIndex({ events, isLoading: false });
        });
    }, [])

    if (eventIndex.isLoading) {
        return <h1>Add a Spinner here</h1>
    }
    return (
        <main className="Page">
            <div className="segment map-wrapper">
                <EventsMap {...eventIndex} />
            </div>
            <h2 className="ui horizontal divider header">Events</h2>
            <ul className="ui list">
                {(eventIndex.events as Array<IEvent>).map((event: IEvent) => (
                    <div className="item" key={event.id}>
                        <i className="map marker icon"></i>
                        <div className="content">
                            <Link to={`/events/${event.id}`} className="ui link header" href="">
                                {event.title}
                            </Link>
                            <div className="description">{event.address}</div>
                        </div>
                    </div>
                ))}
            </ul>
        </main>
    )

}