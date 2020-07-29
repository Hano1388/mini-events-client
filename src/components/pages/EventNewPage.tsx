import React from 'react';

// import { Event } from '../../api/event';
// import { EventForm } from '../EventForm';
import { RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps<{}> {
    currentUser: IUser;
}

export const EventNewPage: React.FC<RouteComponentProps<{}>> = (props) => {
    console.log(props);
    // const [errors, setError] = useState([]);

    /*
    const createEvent = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { currentTarget } = event;
        const fd = new FormData(currentTarget);

        const newEvent = {
            title: fd.get('title') as string,
            description: fd.get('description') as string,
            date: fd.get('date') as string,
            address: fd.get('address') as string,
            user_id: 1 // need to grab user_id from currentUser.id
        }

        Event.create(newEvent).then(data => {
            // look into errors and setErrors if there were errors
            // if (data.errors) {
            //     setErrors(data.errors);
            //     console.log('create event errors: ', errors)
            // } else {
            //     props.history.push(`/events/${data.id}`);
            // }
        });

        currentTarget.reset();
    };
    */

    return (
        <h1>Call EventForm with errors, createEvent, and buttonCaption</h1>
        // <EventForm
        //     errors={errors}
        //     onCreateEvent={createEvent}
        //     buttonCaption="Create Event"
        // />
    )
}