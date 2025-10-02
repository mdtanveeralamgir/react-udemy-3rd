import {Await, redirect, useParams} from "react-router-dom";
import EventItem from "../components/EventItem";
import {useRouteLoaderData} from "react-router-dom";
import EventsList from "../components/EventsList";
import {Suspense} from "react";

export default function EventDetail() {
    const {id} = useParams();
    const {event, events} = useRouteLoaderData('event-detail');
    return <>
        <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={event}>
                {(loadedEvent) => <EventItem event={loadedEvent}/>}
            </Await>
        </Suspense>
    </>
}

async function loadEvent(id) {

    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Event not found'}), {status: 500});
    } else {
        const resData = await response.json();
        console.log(resData)
        return resData.event;
    }
}

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

export async function loader({request, params}) {

    const id = params.eventId;
    console.log(id)
    return {
        event: loadEvent(id),
        //adding wait will wait for the data to load before page loads
        // event: await loadEvent(id),
        events: loadEvents(),
    };
}

export async function action({request, params}) {
    const response = await fetch('http://localhost:8080/events/' + params.id, {
        method: request.method,
    });
    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Cannot be deleted'}), {status: 500});
    } else {
        return redirect('/events');
    }
}
