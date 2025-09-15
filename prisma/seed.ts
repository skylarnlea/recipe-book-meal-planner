// prisma/seed.ts
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
        image: "https://images.unsplash.com/photo-1603133872878-684f372b3b6b"
      },
      {
        title: "Avocado Toast",
        ingredients: "Bread, Avocado, Lemon, Chili Flakes, Salt, Pepper",
        instructions: "1. Toast bread. 2. Mash avocado with lemon. 3. Spread on toast. 4. Sprinkle chili flakes.",
        category: "Breakfast",
        image: "https://images.unsplash.com/photo-1559628232-181f8113b1ce"
      },
      {
        title: "Chicken Salad",
        ingredients: "Chicken Breast, Lettuce, Cucumber, Tomato, Olive Oil, Balsamic Vinegar",
        instructions: "1. Grill chicken. 2. Chop veggies. 3. Mix together. 4. Drizzle with olive oil & vinegar.",
        category: "Lunch",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
      }
    ]
  });
  console.log('Seed data inserted!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
