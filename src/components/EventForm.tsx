import React from 'react';

import { FormErrors } from './FormErrors';

// This component can be used to create or update 
// an event. It accepts 3 props: 
// (state errors, [createEvent or updateEvent method], buttonMessage)
export const EventForm: React.FC = props => {
    // since create and update event form has similar fields,
    // we can use one form for both
    // checking wether we have create or update event 

    // let doAction;
    // if (props.onUpdateEvent) {
    //     doAction = props.onUpdateEvent;
    // } else {
    //     doAction = props.onCreateEvent;
    // }

    // let updateEvent = { title: '', description: '', date: '', address: '' };
    // let eventPlaceholder = { ...updateEvent };

    // if (props.event) {
    //     updateEvent = {
    //         title: props.event.title,
    //         description: props.event.description,
    //         date: props.event.date,
    //         address: props.event.address,
    //     };
    // } else {
    //     eventPlaceholder = {
    //         title: 'Enter event title',
    //         description: 'Enter event description',
    //         date: 'Enter event date',
    //         address: 'Enter event address',
    //     };
    // }
    return (
        <h1>Event form</h1>
        // <form
        //     className='EventForm ui form'
        //     onSubmit={event => doAction(event)}>
        //     <div className='field'>
        //         <label htmlFor='title'>Title</label>
        //         <FormErrors errors={props.errors} forField='title' />
        //         <input
        //             type='text'
        //             name='title'
        //             id='title'
        //             defaultValue={updateEvent.title}
        //             placeholder={eventPlaceholder.title}
        //         />
        //     </div>
        //     <div className='field'>
        //         <label htmlFor='description'>Description</label>
        //         <FormErrors errors={props.errors} forField='description' />
        //         <textarea
        //             name='description'
        //             id='description'
        //             rows='3'
        //             defaultValue={updateEvent.description}
        //             placeholder={eventPlaceholder.description}
        //         />
        //     </div>

        //     <div className='field'>
        //         <label htmlFor='date'>Date</label>
        //         <FormErrors errors={props.errors} forField='date' />
        //         <input
        //             type='date'
        //             name='date'
        //             id='date'
        //             defaultValue={updateEvent.date}
        //             placeholder={eventPlaceholder.date}
        //         />
        //     </div>

        //     <div className='field'>
        //         <label htmlFor='address'>Address</label>
        //         <FormErrors errors={props.errors} forField='address' />
        //         <input
        //             type='text'
        //             name='address'
        //             id='address'
        //             defaultValue={updateEvent.address}
        //             placeholder={eventPlaceholder.address}
        //         />
        //     </div>

        //     <button className='ui orange button' type='submit'>
        //         {props.buttonCaption}
        //     </button>
        // </form>
    );
};