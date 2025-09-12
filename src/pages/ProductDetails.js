import {useParams, Link} from "react-router-dom";
export default function ProductDetails() {
const {productId} = useParams();
    return <><p>{productId}</p>
    {/*
        the relative is 'route' bu default
        if it's set to route:
            - the back button will take to the parent route (in this case home route)
    */}
    <Link to='..' relative='path'>Back</Link>
    </>
}