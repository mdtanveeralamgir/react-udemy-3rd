import {Link, Outlet, useParams} from 'react-router-dom';
import {useQuery, useMutation} from '@tanstack/react-query';

import Header from '../Header.jsx';
import {deleteEvent, fetchEvent} from "../../util/http.js";

export default function EventDetails() {
    const {id} = useParams();
    const {data, isLoading, isError, error} = useQuery({
        queryFn: (signal) => fetchEvent({id, signal}),
    });

    const {mutate} = useMutation({
        mutationFn: deleteEvent({id}),
    });

    function handleDelete() {
        console.log('delete');
        mutate();
    }


    return (
        <>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Failed to load event</p>}
            {data &&
                <>
                    <Outlet/>
                    <Header>
                        <Link to="/events" className="nav-item">
                            View all Events
                        </Link>
                    </Header>
                    <article id="event-details">
                        <header>
                            <h1>{data.title}</h1>
                            <nav>
                                <button onClick={handleDelete}>Delete</button>
                                <Link to="edit">Edit</Link>
                            </nav>
                        </header>
                        <div id="event-details-content">
                            <img src={"http://localhost:3000/" + data.image} alt={data.alt}/>
                            <div id="event-details-info">
                                <div>
                                    <p id="event-details-location">{data.location}</p>
                                    <time dateTime={`Todo-DateT$Todo-Time`}>{data.date}@{data.time}</time>
                                </div>
                                <p id="event-details-description">{data.description}</p>
                            </div>
                        </div>
                    </article>
                </>
            }
        </>
    );
}
