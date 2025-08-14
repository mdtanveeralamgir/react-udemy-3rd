import {useState, useEffect} from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({onSelectPlace}) {
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        async function fetchPlaces() {
            setIsLoading(true);
            const response = await fetch('http://localhost:3000/places');
            const resData = await response.json();
            setAvailablePlaces(resData.places);
            setIsLoading(false);
        }

        fetchPlaces();
    }, []);

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
