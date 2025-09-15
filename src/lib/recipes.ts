import prisma from './db';
import type { Recipe } from '@prisma/client';

// Get all recipes
export async function getAllRecipes(): Promise<Recipe[]> {
  return await prisma.recipe.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

// Get a single recipe by ID
export async function getRecipeById(id: number): Promise<Recipe | null> {
  return await prisma.recipe.findUnique({
    where: { id },
  });
}

// Create a new recipe
export async function createRecipe(data: {
  title: string;
  ingredients: string;
  instructions: string;
  category: string;
  image?: string;
}): Promise<Recipe> {
  return await prisma.recipe.create({
    data,
  });
}

// Update an existing recipe
export async function updateRecipe(id: number, data: {
  title?: string;
  ingredients?: string;
  instructions?: string;
  category?: string;
  image?: string;
}): Promise<Recipe> {
  return await prisma.recipe.update({
    where: { id },
    data,
  });
}

// Delete a recipe
export async function deleteRecipe(id: number): Promise<Recipe> {
  return await prisma.recipe.delete({
    where: { id },
  });
}