import Link from "next/link";

export default function NewsPage() {
    return <>
        <h1>News page</h1>
        <ul>
            <li><Link href="/news/about-next-js">About next js</Link></li>
            <li><Link href="/news/about-react-js">About React js</Link></li>
        </ul>
    </>
}