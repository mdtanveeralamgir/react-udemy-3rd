export default async function MealDetails({params}) {
    const {mealSlug} = await params;
    return <h1>{mealSlug}</h1>
}