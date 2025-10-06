import {Link, useNavigate, useParams} from 'react-router-dom';
import {useQuery, useMutation} from "@tanstack/react-query";

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {fetchEvents, updateEvent, queryClient} from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
    const navigate = useNavigate();
    const {id} = useParams();
    const {data, isPending, isError, error} = useQuery({
        queryKey: ['events', id],
        queryFn: ({signal}) => fetchEvents({signal, id: id}),
    });
    const {mutate} =
        useMutation({
            mutationFn: updateEvent,

            onMutate: async (data) => {
                const event = data.event;
                await queryClient.cancelQueries(['events', id])//cancelling any other same query
                const previousEvent = queryClient.getQueriesData(['events', id])//getting old saved data


                queryClient.setQueriesData(['events', id], event)//updating the data instantly before even updating in db
                return {previousEvent};
            },
            onError: (error, data, context) => {
                queryClient.setQueriesData(['events', id], context.previousEvent); //rolling back to previous event if db update fails
            },
            //this function runs for any response error/success
            onSettled: () => {
                queryClient.invalidateQueries(['events', id]);//refetch the data
            }
        })


    function handleSubmit(formData) {
        mutate({id, event: formData});
        navigate('../');
    }

    function handleClose() {
        navigate('../');
    }

    let content;
    if (isPending)
        content = (
            <div className="center"><LoadingIndicator/></div>
        )
    if (isError)
        content = (
            <>
                <ErrorBlock title="Cannot edit now" message={error.info?.message || 'Failed to edit event'}/>
                <div className="form-actions">
                    <Link to="../" className="button-text">Okay</Link>

                </div>
            </>
        )
    if (data) {
        content = (
            <EventForm inputData={data} onSubmit={handleSubmit}>
                <Link to="../" className="button-text">
                    Cancel
                </Link>
                <button type="submit" className="button">
                    Update
                </button>
            </EventForm>
        )
    }
    return (
        <Modal onClose={handleClose}>
            {content}
        </Modal>
    );
}
