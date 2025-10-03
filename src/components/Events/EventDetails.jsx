import {Link, Outlet, useParams, useNavigate} from 'react-router-dom';
import {useQuery, useMutation} from '@tanstack/react-query';

import Header from '../Header.jsx';
import {deleteEvent, fetchEvent, queryClient} from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import {useState} from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [isDeleting, setIsDeleting] = useState(false);

    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['events', id], queryFn: (signal) => fetchEvent({id, signal}),
    });

    const {mutate, isPending: isPendingDeletion, isError: isErrorDeleting, error: errorDeleting} = useMutation({
        mutationFn: deleteEvent,
        onSuccess: () => {
            queryClient.invalidateQueries(
                {
                    queryKey: ['events'],
                    refetchType: 'none' //will prevent refreshing this page right after invadation of query
                });
            navigate('/events');
        }
    });

    function handleStartDelete() {
        setIsDeleting(true);
    }

    function handleEndDelete() {
        setIsDeleting(false);
    }

    function handleDelete() {
        mutate({id});
    }

    let content;
    if (isLoading) {
        content = (<div id="event-details-content" className="center">
            <p>Fetching event data.......</p>
        </div>);
    }
    if (isError) {
        content = (<div id="event-details-content" className="center">
            <ErrorBlock title="Loading failed" message={error.info?.message || 'Failed to load event'}/>
        </div>);
    }

    if (data) {
        const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        })

        content = (
            <>
                <header>
                    <h1>{data.title}</h1>
                    <nav>
                        <button onClick={handleStartDelete}>Delete</button>
                        <Link to="edit">Edit</Link>
                    </nav>
                </header>
                <div id="event-details-content">
                    <img src={"http://localhost:3000/" + data.image} alt={data.title}/>
                    <div id="event-details-info">
                        <div>
                            <p id="event-details-location">{data.location}</p>
                            <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate}</time>
                        </div>
                        <p id="event-details-description">{data.description}</p>
                    </div>
                </div>
            </>

        );
    }


    return (<>
        <>
            {isDeleting &&
                <Modal onClose={handleEndDelete}>
                    <h1>Are you sure about deleting this?</h1>
                    <p>This action cannot be undone</p>
                    <div className="form-actions">
                        {isPendingDeletion && <p>Deleting...</p>}
                        {!isPendingDeletion && <>
                            <button onClick={handleEndDelete} className="button-text">Cancel</button>
                            <button onClick={handleDelete} className="button">Delete</button>
                        </>
                        }

                    </div>
                    {isErrorDeleting && <ErrorBlock title="Error deleting"
                                                    message={errorDeleting.info?.message || 'Failed to delete event'}/>}
                </Modal>
            }
            <Outlet/>
            <Header>
                <Link to="/events" className="nav-item">
                    View all Events
                </Link>
            </Header>
            <article id="event-details">
                {content}
            </article>
        </>
    </>);
}
