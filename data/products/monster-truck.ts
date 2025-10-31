import { Product } from "../products";

const createMonsterTruckProducts = () => {
  const products = [];
  for (let i = 1; i <= 16; i++) {
    products.push({
      id: `monster-truck-${i}`,
      name: "Monster Truck Balloon",
      slug: "monster-truck-details",
      price: 12.0,
      description: "Perfect for monster truck",
      images: [`/images/products/monster-truck/monster-truck-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "theme",
        theme: "monster-truck",
      },
      inStock: true,
      stock: 100,
      sku: `MONSTER_TRUCK_${i.toString().padStart(3, "0")}`,
      tags: ["monster-truck", "balloon"],
    });
  }
  return products;
};

export const monstertruckProducts: Product[] = createMonsterTruckProducts();

export const getMonsterTruckProducts = (): Product[] => {
  return monstertruckProducts;
};
