=> pages
=> Link
=> layout
=> css/favicon
=> dymanic route (slug)
=> Image
=> use client
=> usePathName
=> fileReader (js)
=> 'use server'
=> useFormStatus
=> useActionState
=> useRouter (next)
=> getStaticProps
=> revalidate
=> getServerSideProps
=> API route for backend

430*: pages
- how routing works using pages
431*: Link
- navigate to pages using Link
432: layout
- how does the page wrapper <html> <body> work
- how does the header work
433: css/favicon
- how to add css
- how to add favicon
- organize folder
435*: dymanic route
- catching the route param in the page using slug
442: Image
- using next.js Image component
446*: use client
- using use client to render page on client side
447*: usePathname
- get current path using usePathname
450*:
- fetching meals using sqlite3 db
451*:
- adding loading page
- shows up by default without attaching loading page
452*:
- showing loading using suspense
453*:
- next.js error page to catch all errors
454*:
- next.js default not found page
458*:
- triggering click event of an input using useRef
459*: fileReader
- image picker and preview using fileReader
461*: 'use server'
- submit form using use server annotation
462*:
- separating client and server components
463*: xss, slugify
- create slug using slugify
- clean data using xss to prevent cross site scripting
464*:
- adding a new item after processing the added image from file
465*: useFormStatus
- get the status of a form and change submitting
467*: useActionState
- submitting form and keeping the inputs value if invalid
469*: revalidatePath
- clear cache using revalidatePath
- for a page or all nested pages
473*
- adding dynamic metadata
480-81: useRouter
    - passing param to pages using query string
487*:
      - adding layout to _app
490*:
  - How not to fetch data using useEffect and useState
491*: getStaticProps
  - Fetch data in server
492*: revalidate
  - re-generate page with latest data after specific time
493*: getServerSideProps
  - SSR with getServerSideProps to regenerate page on every request
495*: getStaticPaths
  - generate dynamic pages using getStaticPaths
496*: API route
  - define API route