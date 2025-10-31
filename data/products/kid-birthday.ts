import { Product } from "../products";

const createKidBirthdayProducts = () => {
  const products = [];
  for (let i = 1; i <= 100; i++) {
    products.push({
      id: `kid-birthday-${i}`,
      name: "Kid Birthday Balloon",
      slug: "kid-birthday-details",
      price: 12.0,
      description: "Perfect for kid birthday",
      images: [`/images/products/kid-birthday/kid-birthday-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "occasion",
        occasion: "kid-birthday",
      },
      inStock: true,
      stock: 100,
      sku: `KID_BIRTHDAY_${i.toString().padStart(3, "0")}`,
      tags: ["kid-birthday", "balloon"],
    });
  }
  return products;
};

export const kidbirthdayProducts: Product[] = createKidBirthdayProducts();

export const getKidBirthdayProducts = (): Product[] => {
  return kidbirthdayProducts;
};
