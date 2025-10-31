import { Product } from "../products";

const createBirthdayCakesProducts = () => {
  const products = [];
  for (let i = 1; i <= 52; i++) {
    products.push({
      id: `birthday-cakes-${i}`,
      name: "Birthday Cakes Balloon",
      slug: "birthday-cakes-details",
      price: 12.0,
      description: "Perfect for birthday cakes",
      images: [`/images/products/birthday-cakes/birthday-cakes-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "theme",
        theme: "birthday-cakes",
      },
      inStock: true,
      stock: 100,
      sku: `BIRTHDAY_CAKES_${i.toString().padStart(3, "0")}`,
      tags: ["birthday-cakes", "balloon"],
    });
  }
  return products;
};

export const birthdaycakesProducts: Product[] = createBirthdayCakesProducts();

export const getBirthdayCakesProducts = (): Product[] => {
  return birthdaycakesProducts;
};
