import {useState, useEffect} from 'react';
import Places from './Places.jsx';
import ErrorPage from './Error.jsx';

export default function AvailablePlaces({onSelectPlace}) {
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function fetchPlaces() {

            try {
                setIsLoading(true);
                const response = await fetch('http://localhost:3000/placs');
                const resData = await response.json();

                if (!response.ok)
                    throw new Error('Failed to fetch places');

                setAvailablePlaces(resData.places);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        }

        fetchPlaces();
    }, []);

    if(error){
        return <ErrorPage title="An Error occured" message={error.message}/>
    }
    return (
        <Places
            isLoading={isLoading}
            loadingText="Loading available places..."
            title="Available Places"
            places={availablePlaces}
            onSelectPlace={onSelectPlace}
        />
    );
}
