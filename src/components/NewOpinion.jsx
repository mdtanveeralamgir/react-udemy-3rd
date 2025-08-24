import {useActionState, use} from "react";
import {OpinionsContext} from "../store/opinions-context.jsx";

export function NewOpinion() {
    const [formState, formAction, pending] = useActionState(shareOpinionAction, {errors: null})
    const {addOpinion} = use(OpinionsContext);

    async function shareOpinionAction(prevData, formData) {
        const userName = formData.get('userName');
        const title = formData.get('title');
        const body = formData.get('body');

        let errors = [];

        if (!userName.trim()) {
            errors.push('Provide a username');
        }
        if (title.trim().length < 5) {
            errors.push('Must be at least 5 characters.');
        }
        if (body.trim().length < 5 || title.trim().length > 300) {
            errors.push('Body should be between 5 to 300 characters.');
        }

        if (errors.length > 0) {
            return {
                errors,
                enteredValue: {
                    userName,
                    title,
                    body
                }
            }
        }

        await addOpinion({title, body, userName});
        return {errors: null}
    }

    return (
        <div id="new-opinion">
            <h2>Share your opinion!</h2>
            <form action={formAction}>
                <div className="control-row">
                    <p className="control">
                        <label htmlFor="userName">Your Name</label>
                        <input type="text" id="userName" name="userName"
                               defaultValue={formState.enteredValue?.userName}/>
                    </p>

                    <p className="control">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" defaultValue={formState.enteredValue?.title}/>
                    </p>
                </div>
                <p className="control">
                    <label htmlFor="body">Your Opinion</label>
                    <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValue?.body}></textarea>
                </p>
                {formState.errors && formState.errors.length > 0 &&
                    <ul>
                        {formState.errors.map(error => (<li key={error}>{error}</li>))}
                    </ul>
                }
                <p className="actions">
                    <button type="submit" disabled={pending}>Submit</button>
                </p>
            </form>
        </div>
    );
}
