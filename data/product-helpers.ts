import { getCategoryBySlug } from "./categories";
import { Product } from "./products";
import { getFourthOfJulyProducts } from "./products/4th-of-july";
import { getAdultBirthdayProducts } from "./products/adult-birthday";
import { getAnimalPrintBalloons } from "./products/animal-print";
import { getAnimalsProducts } from "./products/animals";
import { getAnniversaryProducts } from "./products/anniversary";
import { getBabyProducts } from "./products/baby";
import { getBackToSchoolProducts } from "./products/back-to-school";
import { getBarbieProducts } from "./products/barbie";
import { getBirthdayCakesProducts } from "./products/birthday-cakes";
import { getBlackBalloons } from "./products/black";
import { getBlueBalloons } from "./products/blue";
import { getBoyBirthdayProducts } from "./products/boy-birthday";
import { getCelebrationProducts } from "./products/celebration";
import { getChristmasProducts } from "./products/christmas";
import { getCincodeMayoProducts } from "./products/cinco-de-mayo";
import { getClassicThemesProducts } from "./products/classic-themes";
import { getConfettiBalloons } from "./products/confetti";
import { getDinosaurProducts } from "./products/dinosaur";
import { getDisneyPrincessesProducts } from "./products/disney-princesses";
import { getDumpTruckProducts } from "./products/dump-truck";
import { getEasterProducts } from "./products/easter";
import { getEngagementWeddingProducts } from "./products/engagement-wedding";
import { getFathersDayProducts } from "./products/fathers-day";
import { getFireTruckProducts } from "./products/fire-truck";
import { getGetWellSoonProducts } from "./products/get-well-soon";
import { getGirlBirthdayProducts } from "./products/girl-birthday";
import { getGoldBalloons } from "./products/gold";
import { getGraduationProducts } from "./products/graduation";
import { getGreenBalloons } from "./products/green";
import { getHalloweenProducts } from "./products/halloween";
import { getHeartProducts } from "./products/heart";
import { getIvoryNeutralsBalloons } from "./products/ivory-neutrals";
import { getKidBirthdayProducts } from "./products/kid-birthday";
import { getLatexBalloons } from "./products/latex-balloons";
import { getLetterBalloons } from "./products/letter-balloons";
import { getLicensedThemesProducts } from "./products/licensed-themes";
import { getLOLSurpriseProducts } from "./products/lol-surprise";
import { getMermaidProducts } from "./products/mermaid";
import { getMetallicBalloons } from "./products/metallic";
import { getMinnieMickeyMouseProducts } from "./products/minnie-mickey-mouse";
import { getMonsterTruckProducts } from "./products/monster-truck";
import { getMothersDayProducts } from "./products/mothers-day";
import { getNewYearsEveProducts } from "./products/new-years-eve";
import { getNumberBalloons } from "./products/number-balloons";
import { getOrangeBalloons } from "./products/orange";
import { getOrbzProducts } from "./products/orbz";
import { getOrbzBalloons } from "./products/orbz-balloons";
import { getPinkBalloons } from "./products/pink";
import { getPlanesProducts } from "./products/planes";
import { getPrideProducts } from "./products/pride";
import { getPrincePrincessProducts } from "./products/prince-princess";
import { getPurpleBalloons } from "./products/purple";
import { getRaceCarProducts } from "./products/race-car";
import { getRainbowBalloons } from "./products/rainbow";
import { getRainbowsProducts } from "./products/rainbows";
import { getRedBalloons } from "./products/red";
import { getRetirementProducts } from "./products/retirement";
import { getRoseGoldBalloons } from "./products/rose-gold";
import { getRoundProducts } from "./products/round";
import { getSaintPatricksDayProducts } from "./products/saint-patricks-day";
import { getSilverGreyBalloons } from "./products/silver-grey";
import { getSpecialtyBalloons } from "./products/specialty-balloons";
import { getSportsProducts } from "./products/sports";
import { getStarProducts } from "./products/star";
import { getSuperBowlProducts } from "./products/super-bowl";
import { getThanksgivingProducts } from "./products/thanksgiving";
import { getUnicornProducts } from "./products/unicorn";
import { getValentinesDayProducts } from "./products/valentines-day";
import { getWelcomeHomeProducts } from "./products/welcome-home";
import { getWhiteClearBalloons } from "./products/white-clear";
import { getYellowBalloons } from "./products/yellow";

// Mapping category slug to product getter function
const categoryToProductGetter: Record<string, () => Product[]> = {
  // Colors
  red: getRedBalloons,
  orange: getOrangeBalloons,
  yellow: getYellowBalloons,
  green: getGreenBalloons,
  blue: getBlueBalloons,
  purple: getPurpleBalloons,
  pink: getPinkBalloons,
  "rose-gold": getRoseGoldBalloons,
  "white-clear": getWhiteClearBalloons,
  black: getBlackBalloons,
  "silver-grey": getSilverGreyBalloons,
  gold: getGoldBalloons,
  "ivory-neutrals": getIvoryNeutralsBalloons,
  metallic: getMetallicBalloons,
  rainbow: getRainbowBalloons,
  confetti: getConfettiBalloons,
  "animal-print": getAnimalPrintBalloons,
  // Shapes
  heart: getHeartProducts,
  star: getStarProducts,
  round: getRoundProducts,
  orbz: getOrbzProducts,
  // Occasions
  "back-to-school": getBackToSchoolProducts,
  celebration: getCelebrationProducts,
  "adult-birthday": getAdultBirthdayProducts,
  "boy-birthday": getBoyBirthdayProducts,
  "girl-birthday": getGirlBirthdayProducts,
  "kid-birthday": getKidBirthdayProducts,
  "engagement-wedding": getEngagementWeddingProducts,
  baby: getBabyProducts,
  retirement: getRetirementProducts,
  "welcome-home": getWelcomeHomeProducts,
  anniversary: getAnniversaryProducts,
  "get-well-soon": getGetWellSoonProducts,
  graduation: getGraduationProducts,
  // Holidays
  halloween: getHalloweenProducts,
  thanksgiving: getThanksgivingProducts,
  christmas: getChristmasProducts,
  "new-years-eve": getNewYearsEveProducts,
  "super-bowl": getSuperBowlProducts,
  "valentines-day": getValentinesDayProducts,
  "saint-patricks-day": getSaintPatricksDayProducts,
  "mothers-day": getMothersDayProducts,
  easter: getEasterProducts,
  "cinco-de-mayo": getCincodeMayoProducts,
  pride: getPrideProducts,
  "fathers-day": getFathersDayProducts,
  "4th-of-july": getFourthOfJulyProducts,
  // Themes
  "classic-themes": getClassicThemesProducts,
  mermaid: getMermaidProducts,
  unicorn: getUnicornProducts,
  "prince-princess": getPrincePrincessProducts,
  animals: getAnimalsProducts,
  "birthday-cakes": getBirthdayCakesProducts,
  rainbows: getRainbowsProducts,
  sports: getSportsProducts,
  planes: getPlanesProducts,
  dinosaur: getDinosaurProducts,
  "fire-truck": getFireTruckProducts,
  "race-car": getRaceCarProducts,
  "dump-truck": getDumpTruckProducts,
  "monster-truck": getMonsterTruckProducts,
  "licensed-themes": getLicensedThemesProducts,
  "disney-princesses": getDisneyPrincessesProducts,
  barbie: getBarbieProducts,
  "lol-surprise": getLOLSurpriseProducts,
  "minnie-mickey-mouse": getMinnieMickeyMouseProducts,
  // Types
  "number-balloons": getNumberBalloons,
  "letter-balloons": getLetterBalloons,
  "latex-balloons": getLatexBalloons,
  "orbz-balloons": getOrbzBalloons,
  "specialty-balloons": getSpecialtyBalloons,
};

/**
 * Get products by category slug
 * @param categorySlug - The category slug (e.g., 'red', 'christmas', 'heart')
 * @returns Array of products for that category
 */
export const getProductsByCategorySlug = (categorySlug: string): Product[] => {
  const getter = categoryToProductGetter[categorySlug];
  if (!getter) {
    console.warn(`No product getter found for category: ${categorySlug}`);
    return [];
  }
  return getter();
};

/**
 * Get category name and info by slug
 */
export const getCategoryInfo = (categorySlug: string) => {
  // Remove leading slash and 'collections/' if present
  const cleanSlug = categorySlug
    .replace(/^\/collections\//, "")
    .replace(/^\//, "");
  return getCategoryBySlug(`/collections/${cleanSlug}`);
};

/**
 * Get all products from all categories (used to find products by slug)
 */
export const getAllProducts = (): Product[] => {
  const allProducts: Product[] = [];
  Object.values(categoryToProductGetter).forEach((getter) => {
    allProducts.push(...getter());
  });
  return allProducts;
};

/**
 * Get all product variants by slug (products that share the same slug are variants)
 * @param slug - The product slug (e.g., 'heart-details', 'color-balloons-details')
 * @returns Array of products with that slug (variants)
 */
export const getProductsBySlug = (slug: string): Product[] => {
  const allProducts = getAllProducts();
  return allProducts.filter((product) => product.slug === slug);
};

/**
 * Get first product by slug (for product name, price, description)
 */
export const getFirstProductBySlug = (slug: string): Product | undefined => {
  const products = getProductsBySlug(slug);
  return products[0];
};

/**
 * Get category link for a product (for breadcrumbs)
 */
export const getCategoryLinkFromProduct = (product: Product): string => {
  const category = product.category;

  // Check each category type to determine the collection link
  if (category.shape) {
    return `/collections/${category.shape}`;
  }
  if (category.color) {
    return `/collections/${category.color}`;
  }
  if (category.theme) {
    return `/collections/${category.theme}`;
  }
  if (category.holiday) {
    return `/collections/${category.holiday}`;
  }
  if (category.occasion) {
    return `/collections/${category.occasion}`;
  }
  if (category.type) {
    // Handle special cases
    if (category.type === "weights-accessories") {
      return "/collections/weights-accessories";
    }
    if (category.type === "color-balloons") {
      // For color-balloons, try to extract color from product ID or name
      // Check if color is in the product ID (e.g., "red-1")
      const colorMatch = product.id.match(
        /^(red|orange|yellow|green|blue|purple|pink|black|white|gold|silver|rose-gold|ivory|metallic|rainbow|confetti|animal-print)/
      );
      if (colorMatch) {
        return `/collections/${colorMatch[1]}`;
      }
      // Check if color is in the product name
      const colorInName = product.name
        .toLowerCase()
        .match(
          /\b(red|orange|yellow|green|blue|purple|pink|black|white|gold|silver|rose-gold|ivory|metallic|rainbow|confetti|animal-print)\b/
        );
      if (colorInName) {
        return `/collections/${colorInName[1]}`;
      }
      return "/collections";
    }
    return `/collections/${category.type}`;
  }

  return "/collections";
};

/**
 * Get category display name for a product (for breadcrumbs)
 */
export const getCategoryDisplayNameFromProduct = (product: Product): string => {
  const category = product.category;

  if (category.shape) {
    const shapeInfo = getCategoryInfo(category.shape);
    return shapeInfo?.name || category.shape.toUpperCase();
  }
  if (category.color) {
    const colorInfo = getCategoryInfo(category.color);
    return colorInfo?.name || category.color.toUpperCase();
  }
  if (category.theme) {
    const themeInfo = getCategoryInfo(category.theme);
    return themeInfo?.name || category.theme.toUpperCase().replace(/-/g, " ");
  }
  if (category.holiday) {
    const holidayInfo = getCategoryInfo(category.holiday);
    return (
      holidayInfo?.name || category.holiday.toUpperCase().replace(/-/g, " ")
    );
  }
  if (category.occasion) {
    const occasionInfo = getCategoryInfo(category.occasion);
    return (
      occasionInfo?.name || category.occasion.toUpperCase().replace(/-/g, " ")
    );
  }
  if (category.type) {
    if (category.type === "weights-accessories") {
      return "WEIGHTS & ACCESSORIES";
    }
    const typeInfo = getCategoryInfo(category.type);
    return typeInfo?.name || category.type.toUpperCase().replace(/-/g, " ");
  }

  return "COLLECTIONS";
};
