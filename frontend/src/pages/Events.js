import {useLoaderData, Await} from "react-router-dom";

import EventsList from '../components/EventsList';
import {Suspense} from "react";

function Events() {
    const {events} = useLoaderData();
    // if (data.isError) {
    //     return <p>{data.message}</p>;
    // }
    return <Suspense fallBack={<p>Loading...</p>}>
        <Await resolve={events}>
            {(loadedEvents) => <EventsList events={loadedEvents}/>}
        </Await>
    </Suspense>
}

export default Events;

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        //One way to return error and deal with the error in the component
        // return {isError: true, message: 'Something went wrong!'};
        throw new Response(JSON.stringify({message: 'Something went wrong!'}), {status: 500});
    } else {
        /*
        loader supports to return browser's built in function for response
        which is Response()
        means the response we get from fetch can be sent directrly to the component
        useLoaderData will automaticaly convert that response into data
         */
        const resData = await response.json();
        return resData.events;
    }
}


export async function loader() {
    return {
        events: loadEvents(),
    };
}