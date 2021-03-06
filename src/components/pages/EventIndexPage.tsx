import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Spinner } from '../Spinner';
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
        return <Spinner message="Loading Events..." />
    }
    return (
        <main className="Page">
            <div className="map-wrapper">
                <EventsMap {...eventIndex} />
            </div>
            <div className="events-list">
                <h2 className="ui horizontal divider header">Events</h2>

                <div className="ui middle aligned divided list">
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
                </div>
            </div>
        </main>
    )

}