import { Product } from "../products";

const createLicensedThemesProducts = () => {
  const products = [];
  for (let i = 1; i <= 45; i++) {
    products.push({
      id: `licensed-themes-${i}`,
      name: "Licensed Themes Balloon",
      slug: "licensed-themes-details",
      price: 12.0,
      description: "Perfect for licensed themes",
      images: [`/images/products/licensed-themes/licensed-themes-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "theme",
        theme: "licensed-themes",
      },
      inStock: true,
      stock: 100,
      sku: `LICENSED_THEMES_${i.toString().padStart(3, "0")}`,
      tags: ["licensed-themes", "balloon"],
    });
  }
  return products;
};

export const licensedthemesProducts: Product[] = createLicensedThemesProducts();

export const getLicensedThemesProducts = (): Product[] => {
  return licensedthemesProducts;
};
