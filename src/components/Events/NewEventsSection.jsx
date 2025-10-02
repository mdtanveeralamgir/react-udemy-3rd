import {useQuery} from "@tanstack/react-query";
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import {fetchEvents} from "../../util/http.js";

export default function NewEventsSection() {

    const {data, isPending, isError, error} = useQuery({
        queryKey: ['events'], //to store in cache
        queryFn: fetchEvents, //The function (async) that fetchs the data
        staleTime: 5000,  //milisecond; //default is 0; //time to wait before send request to db after fetching from cache
        //gcTime: 30000 //milisecond; //garbage collector; //default is 5 min; //how long the cache should last
    })

    let content;

    if (isPending) {
        content = <LoadingIndicator/>;
    }

    if (isError) {
        content = (
            <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to fetch data'}/>
        );
    }

    if (data) {
        content = (
            <ul className="events-list">
                {data.map((event) => (
                    <li key={event.id}>
                        <EventItem event={event}/>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <section className="content-section" id="new-events-section">
            <header>
                <h2>Recently added events</h2>
            </header>
            {content}
        </section>
    );
}
