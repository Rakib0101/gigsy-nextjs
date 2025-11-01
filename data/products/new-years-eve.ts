import { Product } from "../products";

const createNewYearsEveProducts = () => {
  const products = [];
  for (let i = 1; i <= 5; i++) {
    products.push({
      id: `new-years-eve-${i}`,
      name: "New Year's Eve Balloon",
      slug: "new-years-eve-details",
      price: 12.0,
      description: "Perfect for new year's eve",
      images: [
        `/images/products/new-year/new-years-eve-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "holiday",
        holiday: "new-years-eve",
      },
      inStock: true,
      stock: 100,
      sku: `NEW_YEARS_EVE_${i.toString().padStart(3, "0")}`,
      tags: ["new-years-eve", "balloon"],
    });
  }
  return products;
};

export const newyearseveProducts: Product[] = createNewYearsEveProducts();

export const getNewYearsEveProducts = (): Product[] => {
  return newyearseveProducts;
};
