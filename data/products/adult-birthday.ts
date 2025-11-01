import { Product } from "../products";

const createAdultBirthdayProducts = () => {
  const products = [];
  for (let i = 1; i <= 18; i++) {
    products.push({
      id: `adult-birthday-${i}`,
      name: "Adult Birthday Balloon",
      slug: "adult-birthday-details",
      price: 12.0,
      description: "Perfect for adult birthday",
      images: [
        `/images/products/adult-birthday/adult-birthday-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "occasion",
        occasion: "adult-birthday",
      },
      inStock: true,
      stock: 100,
      sku: `ADULT_BIRTHDAY_${i.toString().padStart(3, "0")}`,
      tags: ["adult-birthday", "balloon"],
    });
  }
  return products;
};

export const adultbirthdayProducts: Product[] = createAdultBirthdayProducts();

export const getAdultBirthdayProducts = (): Product[] => {
  return adultbirthdayProducts;
};
