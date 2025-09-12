=> using form 'action' (react 19) to submit form 
=> useActionState hook
=> useFormStatus hook
=> useOptimistic hook

268: 
    - form action
269 : 
    - get all form data 
    - validate form data 
270: useActionState 
    - use of useActionState to display error messages 
271*: 
- Keep default values of inputs after form submission
275*: 
  - async form submission 
276*: useFormStatus
  - useFormStatus can only be used in a nested component
277*:
  - Submit and call different function for different button pressed
  - upVote for up function
  - downVote for down function
280*: useOptimistic
  - should be called inside a form
  - change the value in display before updating backend
  - rolls back if the backend failed to update