=> useQuery

410*: useQuery
    - setup and use tanstack query
411*: staleTime, gcTime,
    - react query uses cache
    - it displays the data from cache immediately
    - but also send request to db to fetch data to make sure 
      if there is any change in the data it updates that.