import {useRouter} from 'next/router';

export default function DetailPage() {
    const router = useRouter();
    const {newsid} = router.query;
    console.log(newsid);
    return <h1>Detail page</h1>;
}