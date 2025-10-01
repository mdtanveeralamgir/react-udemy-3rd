export async function fetchEvents({signal, searchParam: searchTerm}) {

    let url = 'http://localhost:3000/events';
    if (searchTerm)
        url += `?search=${searchTerm}`;

    //The signal passed by react query is to abort the query if react query wants to
    const response = await fetch(url, {signal: signal});

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const {events} = await response.json();

    return events;
}