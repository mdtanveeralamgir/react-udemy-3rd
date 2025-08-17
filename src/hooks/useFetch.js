import {useEffect, useState} from "react";

export function useFetch(fetchFN, initialValue){
    //these hooks also make sure the useFetch hook is initiated per component that uses it
    //These hooks will become the part of component which will use it
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchFN();
                console.log(data);
                setFetchedData(data);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data.' });
            }

            setIsFetching(false);
        }

        fetchData();
    }, [fetchFN]);

    return {
        isFetching,
        error,
        fetchedData,
    }
}