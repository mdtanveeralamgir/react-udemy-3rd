=> Router
=> createBrowserRouter
=> RouterProvider
=> Link
=> nested route
=> NavLink
=> useNavigate
=> useParams
=> loader
=> useNavigation
=> useRouteError
=> useRouteLoaderData
=> useSubmit
=> useActionData
=> useFetcher
=> Await
=> Suspense

344*:
    - how to set up router
347*:
    - Using Link instead of anchor tag prevents full page refresh
    - hence only necessary components will re-render
348*:
    - Nested route based on link (navbar)
349*:
    - adding error page (page not found)
350*:
    - Using NavLink instead of Link
    - Navlink has built in isActive feature to identify active links
351*: useNavigate
    - navigate to a page programatically
352*: useParams
    - dynamic path
    - passing param to components
353*:
    - Relative vs Absolute path for navigation
    - back button to navigate previous page
    - relative path vs relative route
358* children inside children
    - nested routing
359*
    - using loader to fetch data before rendering page
    - when catching the loader always returns data not promise
360*:
    - the useLoaderData will be available in all components with
    same level and for children
    - but not for the higher level routers
364*: useNavigation
    - useNavigation is used to find out if use navigating a link
    
365*: 
    - loader supports to send response directly to the loader
    - useLoaderData then converts that response to data
367*: errorElement
    - using errorElement we can display error page thrown by loader.
368*: useRouteerror
    - using useRouteError to capture errors thrown from router
369:
    - json() not supported by react-route-dom
370*:
    - passing param to loader function
371*: useRouteLoaderData
    - having one loader for all children
373*:
    - Add a new event using action in router
    - redirect to different page using router redirect
374*: useSubmit
    - submit using action from parent element
    - sending request using action without form element
376*: useActionData
    - Catch error messages from backend using useActionData
    - display error messages sent by backend using useActionData
378*: useFetcher
    - useFetcher.form triggers an action without nevigaing to that page
379*: Await, Suspense
    - Loading a page before the data has been fetched
    - using suspense to show fallback and display the page before data has been fetched

