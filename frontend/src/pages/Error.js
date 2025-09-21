import PageContent from "../components/PageContent";
import {useRouteError} from 'react-router-dom';
import MainNavigation from "../components/MainNavigation";

export default function Error() {
    const error = useRouteError();
    //if a response has been thrown then error.status will be available
    let title = "An error occured!";
    let message = "Something went wrong";
    switch (error.status) {
        case 500:
            message = JSON.parse(error.data).message;
            break;

        case 404:
            title = "pages not found";
            message = "The pages you are looking for does not exist";
            break;
    }

    return <>
        <MainNavigation/>
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>;
    </>
}