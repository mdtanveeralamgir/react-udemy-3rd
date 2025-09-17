import EventForm from "../components/EventForm";
import {redirect} from "react-router-dom";

export default function NewEventPage() {

    return <EventForm/>
}

export async function action({request, params}) {
    const data = await request.formData();
    const eventData = {
        title: data.get('title'),
        date: data.get('date'),
        description: data.get('description'),
        image: data.get('image')
    }
    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
    });

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Something went wrong!'}), {status: 500});
    }

    return redirect('/events');
}