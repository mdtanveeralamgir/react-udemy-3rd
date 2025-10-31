import RSCDemo from '../components/RSCDemo';
import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/DataFetchingDemo";
import ServerActionsDemo from "@/ServerActionsDemo";

export default function Home() {
    return (
        <main>
            {/*using RSC to fetch data and return html element simplifies the fetching data*/}
            {/*this way it's not required to use react hook like useEffect*/}
            {/*<DataFetchingDemo/>*/}
            <ServerActionsDemo/>
        </main>

    );
}
