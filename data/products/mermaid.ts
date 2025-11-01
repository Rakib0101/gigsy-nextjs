import { Product } from "../products";

const createMermaidProducts = () => {
  const products = [];
  for (let i = 1; i <= 4; i++) {
    products.push({
      id: `mermaid-${i}`,
      name: "Mermaid Balloon",
      slug: "mermaid-details",
      price: 12.0,
      description: "Perfect for mermaid",
      images: [
        `/images/products/mermaid/mermaid-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "theme",
        theme: "mermaid",
      },
      inStock: true,
      stock: 100,
      sku: `MERMAID_${i.toString().padStart(3, "0")}`,
      tags: ["mermaid", "balloon"],
    });
  }
  return products;
};

export const mermaidProducts: Product[] = createMermaidProducts();

export const getMermaidProducts = (): Product[] => {
  return mermaidProducts;
};
