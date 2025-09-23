import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, {
    loader as eventDetailLoader,
    action as deleteEventAction,
} from './pages/EventDetail';
import EventsPage, {loader as eventsLoader} from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import {action as manipulateEventAction} from './components/EventForm';
import NewsletterPage, {action as newsletterAction} from './pages/Newsletter';
import Authentication, {action as authFormAction} from "./pages/Authentication";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'auth', element: <Authentication/>, action: authFormAction},
            {
                path: 'events',
                element: <EventsRootLayout/>,
                children: [
                    {
                        index: true,
                        element: <EventsPage/>,
                        loader: eventsLoader,
                    },
                    {
                        path: ':eventId',
                        id: 'event-detail',
                        loader: eventDetailLoader,
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage/>,
                                action: deleteEventAction,
                            },
                            {
                                path: 'edit',
                                element: <EditEventPage/>,
                                action: manipulateEventAction,
                            },
                        ],
                    },
                    {
                        path: 'new',
                        element: <NewEventPage/>,
                        action: manipulateEventAction,
                    },
                ],
            },
            {
                path: 'newsletter',
                element: <NewsletterPage/>,
                action: newsletterAction,
            },
        ],
    },
],
    {
        future: {
            // v7_fetcherPersist: true,
            // v7_normalizeFormMethod: true,
            // v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
    });

function App() {
    return <RouterProvider router={router} future={{
        v7_startTransition: true,
    }}/>;
}

export default App;
