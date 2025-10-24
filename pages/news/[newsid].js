import {useRouter} from 'next/router';

export default function DetailPage() {
    const router = useRouter();
    const {newsid} = router.query;

    return <h1>Detail page {newsid}</h1>;
}