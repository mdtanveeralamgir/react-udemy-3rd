import {Link} from "react-router-dom";

export default function Home() {
    return <>
        <h1>Home</h1>
        <p><Link to='/products'>Products</Link></p>
    </>
}