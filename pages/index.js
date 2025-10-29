import MeetupList from "../components/meetups/MeetupList";

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
export default function HomePage(props) {
    return <MeetupList meetups={props.meetups}/>;

}
//this will be called before any component functions like hooks
//This will also render in server
export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 10, //re-generated page hence fetch latest data every 10 sec
    }
}