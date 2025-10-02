import {useNavigate, useNavigation, useActionData, redirect, Form} from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({method, event}) {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    const data = useActionData();

    function cancelHandler() {
        navigate('..');
    }

    return (
        //This Form of react-router-dom automatically sends it to the active route
        //it also calls the action function defined in that route
        //adding action can send it to specific route
        // <Form method="post" action='/other-route' className={classes.form}>
        <Form method={method} className={classes.form}>
            {data && data.errors && <ul>
                {Object.values(data.errors).map((error) => <li key={error}>{error}</li>)}
            </ul>}
            <p>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" required defaultValue={event?.title}/>
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" name="image" required defaultValue={event?.image}/>
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" name="date" required defaultValue={event?.date}/>
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" rows="5" required defaultValue={event?.description}/>
            </p>
            <div className={classes.actions}>
                <button disabled={isSubmitting} type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button disabled={isSubmitting}>{isSubmitting ? 'Submitting..' : 'Save'}</button>
            </div>
        </Form>
    );
}

export default EventForm;

export async function action({request, params}) {
    const method = request.method;
    const data = await request.formData();
    const eventData = {
        title: data.get('title'),
        date: data.get('date'),
        description: data.get('description'),
        image: data.get('image')
    }
    let url = 'http://localhost:8080/events';
    if (method === 'PATCH') {
        const eventID = params.id;
        url = 'http://localhost:8080/events/' + eventID;
    }
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
    });
    if (response.status === 422)
        return response;
    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Something went wrong!'}), {status: 500});
    }

    return redirect('/events');
}
