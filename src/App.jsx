import {useRef, useState, useEffect} from 'react';

import Places from './components/Places.jsx';
import {AVAILABLE_PLACES} from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import {sortPlacesByDistance} from "./loc.js";

function pickedPlacesArr() {
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    return AVAILABLE_PLACES.filter((place) =>
        storedIds.includes(place.id)
    );
}

function App() {
    const selectedPlace = useRef();
    const [pickedPlaces, setPickedPlaces] = useState(pickedPlacesArr());
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    //useEffect will be executed after the component function is done executing
    //If there is no dependencies are provided the it will execute only once
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);
            setAvailablePlaces(sortedPlaces);
        });
    }, []);

    function handleStartRemovePlace(id) {
        setIsModalOpen(true);
        selectedPlace.current = id;
    }

    function handleStopRemovePlace() {
        setIsModalOpen(false);
    }

    function handleSelectPlace(id) {
        setPickedPlaces((prevPickedPlaces) => {
            if (prevPickedPlaces.some((place) => place.id === id)) {
                return prevPickedPlaces;
            }
            const place = AVAILABLE_PLACES.find((place) => place.id === id);
            return [place, ...prevPickedPlaces];
        });

        //Storing selected places is a side effect
        //But no need to use useEffect for that
        //It can happen in the background without having the user wait for it
        let storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
        if (storedIds.indexOf(id) === -1)
            localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]));
    }

    function handleRemovePlace() {
        setPickedPlaces((prevPickedPlaces) =>
            prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
        );
        setIsModalOpen(false);
        let storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
        storedIds = storedIds.filter((id) => id !== selectedPlace.current);
        localStorage.setItem('selectedPlaces', JSON.stringify(storedIds));
    }

    return (
        <>
            <Modal open={isModalOpen}>
                <DeleteConfirmation
                    onCancel={handleStopRemovePlace}
                    onConfirm={handleRemovePlace}
                />
            </Modal>

            <header>
                <img src={logoImg} alt="Stylized globe"/>
                <h1>PlacePicker</h1>
                <p>
                    Create your personal collection of places you would like to visit or
                    you have visited.
                </p>
            </header>
            <main>
                <Places
                    title="I'd like to visit ..."
                    fallbackText={'Select the places you would like to visit below.'}
                    places={pickedPlaces}
                    onSelectPlace={handleStartRemovePlace}
                />
                <Places
                    title="Available Places"
                    places={availablePlaces}
                    fallbackText="Sorting places by distance..."
                    onSelectPlace={handleSelectPlace}
                />
            </main>
        </>
    );
}

export default App;
