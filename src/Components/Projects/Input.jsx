export default function Input({labelText, isTextArea, ...props}){
    const classes = "focus:outline-none focus:border-stone-600 w-full border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600";
    return <p className="flex flex-col gap-1 my-4">
        <label className="text-sm uppercase font-bold text-stone-500">{labelText}</label>
        {isTextArea ? <textarea className={classes} {...props}/> : <input className={classes} {...props}/>}
    </p>
}