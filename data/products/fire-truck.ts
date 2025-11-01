import { Product } from "../products";

const createFireTruckProducts = () => {
  const products = [];
  for (let i = 1; i <= 2; i++) {
    products.push({
      id: `fire-truck-${i}`,
      name: "Fire Truck Balloon",
      slug: "fire-truck-details",
      price: 12.0,
      description: "Perfect for fire truck",
      images: [
        `/images/products/fire-truck/fire-truck-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "theme",
        theme: "fire-truck",
      },
      inStock: true,
      stock: 100,
      sku: `FIRE_TRUCK_${i.toString().padStart(3, "0")}`,
      tags: ["fire-truck", "balloon"],
    });
  }
  return products;
};

export const firetruckProducts: Product[] = createFireTruckProducts();

export const getFireTruckProducts = (): Product[] => {
  return firetruckProducts;
};
