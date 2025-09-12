import {Link, useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('products')
    }

    return <>
        <h1>Home</h1>
        <p><Link to='products'>Products</Link></p>
        <button onClick={handleClick}>Product</button>
    </>
}