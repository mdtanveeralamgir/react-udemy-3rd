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