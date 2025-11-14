import RSCDemo from '../components/RSCDemo';
import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/DataFetchingDemo";
import ServerActionsDemo from "@/ServerActionsDemo";

import UsePromiseDemo from "@/components/UsePromisesDemo";
import {Suspense} from "react";

export default async function Home() {

    return (
        <main>
            {/*using RSC to fetch data and return html element simplifies the fetching data*/}
            {/*this way it's not required to use react hook like useEffect*/}
            {/*<DataFetchingDemo/>*/}
            {/*<ServerActionsDemo/>*/}
            <Suspense fallback={<div>Loading...</div>}>
            <UsePromiseDemo/>
            </Suspense>
        </main>

    );
}
