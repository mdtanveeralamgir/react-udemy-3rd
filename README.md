=> useQuery
=> useMutation
=> refetchType
=> useIsFetching

410*: useQuery
    - setup and use tanstack query
411*: staleTime, gcTime,
    - react query uses cache
    - it displays the data from cache immediately
    - but also send request to db to fetch data to make sure 
      if there is any change in the data it updates that.
412*:
    - if the event key is save for 2 different components or query then react query will
      use the same result for both of them
    - send param from useQuery to the function that fetches data
413*: abort request
    - abort request 
    - obj destructuring to pass right value to fetch function
414:
    - enable and disable query
415*: useMutation
    - updating data to the server using mutation
417*: onSuccess, invalidQueries
    - refretch data using onsuccess and navigate away
    - invalidate query cache and refretch data using query key
420*: refetchType
    - prevent sending a query right after invadating a query
    - only re-send the query when re-rendering page after invidating
421*:
    - confirmation before deleting event using modal, useState, isPending, isError from mutation
424*:
    - updating UI before db updates 
    - rollback if db updates fail
426*: useIsFetching
    - loader, action, useIsFetching for react query