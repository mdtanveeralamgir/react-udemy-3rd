import MainNavigation from "../Components/MainNavigation";

export default function ErrorPage() {
    return <>
        <MainNavigation/>
        <main>
            <h1>An error occurred</h1>
            <p>Couldn't find the page</p>
        </main>
    </>
}