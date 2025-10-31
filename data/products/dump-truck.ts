import { Product } from "../products";

const createDumpTruckProducts = () => {
  const products = [];
  for (let i = 1; i <= 14; i++) {
    products.push({
      id: `dump-truck-${i}`,
      name: "Dump Truck Balloon",
      slug: "dump-truck-details",
      price: 12.0,
      description: "Perfect for dump truck",
      images: [`/images/products/dump-truck/dump-truck-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "theme",
        theme: "dump-truck",
      },
      inStock: true,
      stock: 100,
      sku: `DUMP_TRUCK_${i.toString().padStart(3, "0")}`,
      tags: ["dump-truck", "balloon"],
    });
  }
  return products;
};

export const dumptruckProducts: Product[] = createDumpTruckProducts();

export const getDumpTruckProducts = (): Product[] => {
  return dumptruckProducts;
};
