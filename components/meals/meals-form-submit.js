'use client'

import {useFormStatus} from "react-dom";

export default function MealsFormSubmit() {
    const status = useFormStatus();

    return <button disabled={status.pending} type="submit">{status.pending ? 'Submitting' : 'Share meal'}</button>
}