// prisma/seed.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.recipe.createMany({
    data: [
      {
        title: "Spaghetti Bolognese",
        ingredients: "Spaghetti, Ground Beef, Onion, Garlic, Tomato Sauce, Olive Oil, Salt, Pepper",
        instructions: "1. Cook spaghetti. 2. Brown beef. 3. Add onions/garlic. 4. Add sauce. 5. Simmer. 6. Serve over pasta.",
        category: "Dinner",
        image: "/images/spaghetti-bolognese.jpg"
      },
      {
        title: "Avocado Toast",
        ingredients: "Bread, Avocado, Lemon, Chili Flakes, Salt, Pepper",
        instructions: "1. Toast bread. 2. Mash avocado with lemon. 3. Spread on toast. 4. Sprinkle chili flakes.",
        category: "Breakfast",
        image: "/images/avocado-toast.jpg"
      },
      {
        title: "Chicken Salad",
        ingredients: "Chicken Breast, Lettuce, Cucumber, Tomato, Olive Oil, Balsamic Vinegar",
        instructions: "1. Grill chicken. 2. Chop veggies. 3. Mix together. 4. Drizzle with olive oil & vinegar.",
        category: "Lunch",
        image: "/images/chicken-salad.jpg"
      }
    ]
  });
  console.log("🌱 Seed data inserted!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
