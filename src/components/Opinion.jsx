// import {useActionState} from "react";
// import {useFormStatus} from "react-dom";

import {use, useActionState} from 'react';
import {OpinionsContext} from "../store/opinions-context.jsx";

export function Opinion({opinion: {id, title, body, userName, votes}}) {
    // const {updateVoteState, upVoteAction} = useFormStatus(upVoteAction, false);

    const {upvoteOpinion, downvoteOpinion} = use(OpinionsContext);

    async function up_voteAction() {
        console.log("Upvoting opinion");
        await upvoteOpinion(id);
    }

    async function down_voteAction() {
        await downvoteOpinion(id);
    }

    const [upVoteState, upVoteAction, upVotepending] = useActionState(up_voteAction, null)
    const [downVoteState, downVoteAction, downVotespending] = useActionState(down_voteAction, null)

    const isPending = upVotepending || downVotespending;
    return (
        <article>
            <header>
                <h3>{title}</h3>
                <p>Shared by {userName}</p>
            </header>
            <p>{body}</p>
            <form className="votes">
                <button formAction={upVoteAction} disabled={isPending}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect width="18" height="18" x="3" y="3" rx="2"/>
                        <path d="m16 12-4-4-4 4"/>
                        <path d="M12 16V8"/>
                    </svg>
                </button>

                <span>{votes}</span>

                <button formAction={downVoteAction} disabled={isPending}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect width="18" height="18" x="3" y="3" rx="2"/>
                        <path d="M12 8v8"/>
                        <path d="m8 12 4 4 4-4"/>
                    </svg>
                </button>
            </form>
        </article>
    );
}
