'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

const isInvalidtext = (text: string) => {
return !text || text.trim() === '';
};

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
      isInvalidtext(meal.title) ||
      isInvalidtext(meal.summary) ||
      isInvalidtext(meal.instructions) ||
      isInvalidtext(meal.creator) ||
      isInvalidtext(meal.creator_email) ||
      !meal.creator_email.includes('@') ||
      !meal.image ||
      meal.image.side === 0
  ) {
    throw new Error('Invalid input');
  }

  await saveMeal(meal);
  redirect('/meals');
};