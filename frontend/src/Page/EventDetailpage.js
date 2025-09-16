import {useParams} from "react-router-dom";
import EventItem from "../components/EventItem";
import {useRouteLoaderData} from "react-router-dom";

export default function EventDetailPage() {
    const {id} = useParams();
    const data = useRouteLoaderData('event-detail');
    return <EventItem event={data.event}/>
}

export async function loader({request, params}) {
    const id = params.id;

    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Event not found'}), {status: 500});
    } else {
        return response;
    }
}