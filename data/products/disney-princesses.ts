import { Product } from "../products";

const createDisneyPrincessesProducts = () => {
  const products = [];
  for (let i = 1; i <= 45; i++) {
    products.push({
      id: `disney-princesses-${i}`,
      name: "Disney Princesses Balloon",
      slug: "disney-princesses-details",
      price: 12.0,
      description: "Perfect for disney princesses",
      images: [`/images/products/disney-princesses/disney-princesses-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "theme",
        theme: "disney-princesses",
      },
      inStock: true,
      stock: 100,
      sku: `DISNEY_PRINCESSES_${i.toString().padStart(3, "0")}`,
      tags: ["disney-princesses", "balloon"],
    });
  }
  return products;
};

export const disneyprincessesProducts: Product[] = createDisneyPrincessesProducts();

export const getDisneyPrincessesProducts = (): Product[] => {
  return disneyprincessesProducts;
};
