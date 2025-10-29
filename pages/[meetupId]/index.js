import MeetupDetails from "../../components/meetups/MeetupDetails";

export default function MeetupDetail({meetupId}) {
    return <MeetupDetails
        image='https://upload.wikimedia.org/wikipedia/commons/5/5f/Bangladesh_Bank_%2833398162476%29.jpg'
        title='A first meetup'
        address='123 Main St'
        description='A first meetup description'
    />
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Bangladesh_Bank_%2833398162476%29.jpg',
                title: 'A first meetup',
                address: '123 Main St',
                description: 'A first meetup description',
                id: meetupId
            }
        }
    }
}