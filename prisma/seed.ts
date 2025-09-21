import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { categories, ingredients, products } from "./constants";
import { Prisma } from "@prisma/client";

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

interface generateProductItemProps {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}

const generateProductItem = ({
  productId,
  pizzaType,
  size,
}: generateProductItemProps) => {
  return {
    productId,
    price: randomNumber(5, 30),
    pizzaType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.com",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Test",
        email: "admin@test.com",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Pepperoni fresh",
      imageUrl:
        "https://www.freshslice.com/wp-content/uploads/2022/11/Classic-Pepperoni.jpg",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Cheese pizza",
      imageUrl:
        "https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Chorizo fresh",
      imageUrl:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-pizza-60725d3.jpg",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      generateProductItem({
        productId: pizza1.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductItem({
        productId: pizza1.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductItem({
        productId: pizza1.id,
        pizzaType: 2,
        size: 40,
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 1,
        size: 30,
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 1,
        size: 40,
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 2,
        size: 20,
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: 2,
        size: 40,
      }),
      generateProductItem({
        productId: pizza3.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductItem({
        productId: pizza3.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductItem({
        productId: pizza3.id,
        pizzaType: 2,
        size: 40,
      }),

      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmout: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmout: 0,
        token: "222222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
        productItemId: 1,
        cartId: 1,
        quantity: 2,
        ingredients: {
          connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
        },
      },
  });
}

async function down() {
  await prisma.$executeRawUnsafe(`
    TRUNCATE TABLE 
      "User", 
      "Category", 
      "Cart", 
      "CartItem", 
      "Ingredient", 
      "Product", 
      "ProductItem"
    RESTART IDENTITY CASCADE;
  `);
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.log(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
