// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage.js
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage.js
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage.js
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './Page/HomePage';
import EventsPage, {loader as loadPage} from './Page/EventsPage';
import EventDetailPage, {loader as loadEventDetails} from "./Page/EventDetailpage";
import NewEventPage from "./Page/NewEventPage";
import EditEventPage from "./Page/EditEventPage";
import EventsLayout from "./Page/EventsLayout";
import NavigationLayout from "./Page/NavigationLayout";
import ErrorPage from "./Page/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavigationLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "events",
                element: <EventsLayout/>,
                children: [
                    {
                        index: true,
                        element: <EventsPage/>,
                        loader: loadPage
                    },
                    {
                        path: "new",
                        element: <NewEventPage/>
                    },
                    {
                        path: ":id",
                        element: <EventDetailPage/>,
                        loader: loadEventDetails,
                    },
                    {
                        path: ":id/edit",
                        element: <EditEventPage/>
                    },
                ]
            }
        ]
    }

])

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
