import {useRef, useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {fetchEvents} from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";

export default function FindEventSection() {
    const searchElement = useRef();
    const [searchTerm, setSearchTerm] = useState();

    //difference between isPending and isLoading is that the isLoading is not ture if
    //the query is disabled
    const {data, isLoading, isError, error} = useQuery({
        /*
        * if the event key is save for 2 different components or query then react query will
            use the same result for both of them
        * {search: searchElement.current.value} using this as key will make sure react query caches
            differnt request for different search string
        *  using this ref "searchElement.current.value" will not make the query send to db for every time
           changes. because useRef does not make the component re-render if input changes
        * */
        queryKey: ['events', {search: searchTerm}],
        queryFn: ({signal}) => fetchEvents({signal, searchTerm}),
        enabled: searchTerm !== undefined, //if the query should work or not
    })

    function handleSubmit(event) {
        event.preventDefault();
        setSearchTerm(searchElement.current.value);
    }

    let content = <p>Please enter a search term and to find events.</p>;
    if (isLoading) {
        content = <LoadingIndicator/>
    }
    if (isError)
        content = <ErrorBlock title="An error occured" message={error.info?.message || 'Failed to fetch data'}/>

    if (data) {
        content = <ul className="events-list">
            {data.map(event => {
                return (
                    <li key={event.id}>
                        <EventItem event={event}/>
                    </li>
                )
            })}
        </ul>
    }

    return (
        <section className="content-section" id="all-events-section">
            <header>
                <h2>Find your next event!</h2>
                <form onSubmit={handleSubmit} id="search-form">
                    <input
                        type="search"
                        placeholder="Search events"
                        ref={searchElement}
                    />
                    <button>Search</button>
                </form>
            </header>
            {content}
        </section>
    );
}
