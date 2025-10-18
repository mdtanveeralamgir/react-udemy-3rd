import {Link, redirect, useNavigate, useParams, useSubmit, useNavigation} from 'react-router-dom';
import {useQuery} from "@tanstack/react-query";

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {fetchEvent, updateEvent, queryClient} from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
    const navigate = useNavigate();
    const params = useParams();
    const submit = useSubmit();
    const {state} = useNavigation();
    const {data, isError, error} = useQuery({
        queryKey: ['events', params.id],
        queryFn: ({signal}) => fetchEvent({signal, id: params.id}),
        staleTime: 10000,
    });
    // const {mutate} = useMutation({
    //     mutationFn: updateEvent,
    //     onMutate: async (data) => {
    //         const event = data.event;
    //         await queryClient.cancelQueries({queryKey: ['events', data.id]})//cancelling any other same query
    //         const previousEvent = queryClient.getQueriesData(['events', data.id])//getting old saved data
    //         queryClient.setQueriesData(['events', data.id], event)//updating the data instantly before even updating in db
    //         return {previousEvent};
    //     },
    //     onError: (error, data, context) => {
    //         queryClient.setQueriesData(['events', data.id], context.previousEvent); //rolling back to previous event if db update fails
    //     },
    //     //this function runs for any response error/success
    //     onSettled: () => {
    //         queryClient.invalidateQueries(['events', data.id]);//refetch the data
    //     }
    // })


    function handleSubmit(formData) {
        submit(formData, {method: 'PUT'});
    }

    function handleClose() {
        navigate('../');
    }

    let content;

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
                {state === 'submitting' ? <p>Updating event...</p> : <>
                    <Link to="../" className="button-text">
                        Cancel
                    </Link>
                    <button type="submit" className="button">
                        Update
                    </button>
                </>}

            </EventForm>
        )
    }
    return (
        <Modal onClose={handleClose}>
            {content}
        </Modal>
    );
}

export function loader({params}) {
    return queryClient.fetchQuery({
        queryKey: ['events', params.id],
        queryFn: ({signal}) => fetchEvent({signal, id: params.id}),
    })
}

export async function action({request, params}) {
    const formData = await request.formData();
    const updatedEventData = Object.fromEntries(formData);
    await updateEvent({id: params.id, event: updatedEventData});
    await queryClient.invalidateQueries(['events']);
    return redirect('../');
}