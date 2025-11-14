//all components in next is a server component unless specified like below
'use client';

import { useState } from 'react';
import RSCDemo from "@/components/RSCDemo";

export default function ClientDemo({ children }) {
    const [count, setCount] = useState(0); // <- this is why it's a client component

    console.log('ClientDemo rendered');
    return (
        <div className="client-cmp">
            <h2>A React Client Component</h2>
            <p>
                Will be rendered on the client <strong>AND</strong> the server.
            </p>
            {/*using server component as child inside client component is okay*/}
            {children}
            {/*Server cmponent inside a client component will be rendered as client component*/}
            {/*it will be converted as client component*/}
            {/*<RSCDemo />*/}
        </div>
    );
}