import { Product } from "../products";

const createLatexBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 67; i++) {
    balloons.push({
      id: `latex-balloon-${i}`,
      name: "Latex Balloon",
      slug: "latex-balloons-details",
      price: 12.0,
      description: "Classic latex balloon perfect for any celebration",
      images: [
        `/images/products/latex-balloons/latex-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "latex-balloons",
      },
      inStock: true,
      stock: 100,
      sku: `LATEX-${i.toString().padStart(3, "0")}`,
      tags: ["latex", "balloon"],
    });
  }
  return balloons;
};

export const latexBalloons: Product[] = createLatexBalloons();

export const getLatexBalloons = (): Product[] => {
  return latexBalloons;
};
