'use server'

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

function isInvalid(text) {
    return !text || text.trim() === '';
}

export async function shareMeal(preState, formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    }

    if (isInvalid(meal.title) ||
        isInvalid(meal.summary) ||
        isInvalid(meal.instructions) ||
        isInvalid(meal.creator) ||
        isInvalid(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image.size === 0
    ) {

        return {message: 'Invalid meal data'};
    }

    await saveMeal(meal);
    revalidatePath('/meals'); //only meals page will be revalidated hence cleaning cache for only meals page
    // revalidatePath('/meals', 'layout'); //free cache for all the nexted page
    redirect('/meals')
}