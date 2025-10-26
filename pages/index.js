import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from "react";

const DUMMY_MEETUPS = [
    {
        id: 1,
        title: 'React Meetup',
        address: '123 Main St',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Bangladesh_Bank_%2833398162476%29.jpg',
        description: 'React Meetup Description'
    },
    {
        id: 2,
        title: 'Angular Meetup',
        address: '123 Main St',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Bangladesh_Bank_%2833398162476%29.jpg',
        description: 'Angular Meetup Description'
    }
]
export default function HomePage() {
    //with this state and use effect approach the page will render twice
    //once with empty data, then again when data has been fetched from db
    //but next always render the first build page, hence some data will be missing
    const [loadedMeetups, setLoadedMeetups] = useState([])
    useEffect(() => {
        setLoadedMeetups(DUMMY_MEETUPS)
    }, []);
    return <MeetupList meetups={loadedMeetups}/>;

}