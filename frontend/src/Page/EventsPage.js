import {useLoaderData} from "react-router-dom";

import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    // if (data.isError) {
    //     return <p>{data.message}</p>;
    // }
    const events = data.events;

    return (
        <>
            <EventsList events={events}/>
        </>
    );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/evnts');

    if (!response.ok) {
        //One way to return error and deal with the error in the component
        // return {isError: true, message: 'Something went wrong!'};
        throw {message: 'Something went wrong!'}
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