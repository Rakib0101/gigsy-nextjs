import { Product } from "../products";

const createEngagementWeddingProducts = () => {
  const products = [];
  for (let i = 1; i <= 14; i++) {
    products.push({
      id: `engagement-wedding-${i}`,
      name: "Engagement & Wedding Balloon",
      slug: "engagement-wedding-details",
      price: 12.0,
      description: "Perfect for engagement & wedding",
      images: [
        `/images/products/engagement/engagement-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "occasion",
        occasion: "engagement-wedding",
      },
      inStock: true,
      stock: 100,
      sku: `ENGAGEMENT_WEDDING_${i.toString().padStart(3, "0")}`,
      tags: ["engagement-wedding", "balloon"],
    });
  }
  return products;
};

export const engagementweddingProducts: Product[] =
  createEngagementWeddingProducts();

export const getEngagementWeddingProducts = (): Product[] => {
  return engagementweddingProducts;
};
