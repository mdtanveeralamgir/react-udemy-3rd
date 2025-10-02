import classes from './NewsletterSignup.module.css';
import {useFetcher} from "react-router-dom";
import {useEffect} from "react";

function NewsletterSignup() {
    const fetchers = useFetcher();
    const {data, state} = fetchers;
    useEffect(() => {
        if (state === 'idle' && data && data.message)
            window.alert(data.message)
    }, [data, state]);
    return (
        <fetchers.Form method="post" action="/newsletter" className={classes.newsletter}>
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
            />
            <button>Sign up</button>
        </fetchers.Form>
    );
}

export default NewsletterSignup;
