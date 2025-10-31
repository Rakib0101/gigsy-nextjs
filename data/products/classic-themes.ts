import { Product } from "../products";

const createClassicThemesProducts = () => {
  const products = [];
  for (let i = 1; i <= 78; i++) {
    products.push({
      id: `classic-themes-${i}`,
      name: "Classic Themes Balloon",
      slug: "classic-themes-details",
      price: 12.0,
      description: "Perfect for classic themes",
      images: [`/images/products/classic-themes/classic-themes-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "theme",
        theme: "classic-themes",
      },
      inStock: true,
      stock: 100,
      sku: `CLASSIC_THEMES_${i.toString().padStart(3, "0")}`,
      tags: ["classic-themes", "balloon"],
    });
  }
  return products;
};

export const classicthemesProducts: Product[] = createClassicThemesProducts();

export const getClassicThemesProducts = (): Product[] => {
  return classicthemesProducts;
};
