import { getAllRecipes } from "@/lib/recipes";
import Link from "next/link";
import Image from "next/image";

const RecipesPage = async () => {
  const recipes = await getAllRecipes();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Recipes</h1>

      {recipes.length === 0 ? (
        <p className="text-gray-500">No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              className="block border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
            >
                <Image
                    src={recipe.image || '/images/default-recipe.jpg'}
                    alt={recipe.title}
                    className="w-full h-48 object-cover"
                    width={400}
                    height={300}
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold">{recipe.title}</h2>
                    <p className="text-sm text-gray-600">{recipe.category}</p>
                </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipesPage;
