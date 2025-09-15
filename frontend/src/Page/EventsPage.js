import {useLoaderData} from "react-router-dom";

import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;

    return (
        <>
            <EventsList events={events}/>
        </>
    );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
    } else {
        /*
        loader supports to return browser's built in function for response
        which is Response()
        means the response we get from fetch can be sent directrly to the component
        useLoaderData will automaticaly convert that response into data
         */
        return response;
    }
}