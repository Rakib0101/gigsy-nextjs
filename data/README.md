# Data Management

This directory contains all centralized data for the JoyInflate Next.js store.

## Files

### `categories.ts`

Contains all category data organized by:

- **By Type**: Number Balloons, Letter Balloons, Foil Shapes, Latex Balloons, Orbz Balloons, Specialty Balloons
- **By Occasion**: Back to School, Celebrations, Birthdays, Weddings, etc.
- **By Color**: Red, Orange, Yellow, Green, Blue, Purple, Pink, etc.
- **By Shape**: Heart, Star, Round, Orbz
- **By Holiday**: Christmas, Halloween, Valentine's Day, Easter, etc.
- **By Theme**: Classic Themes (Unicorn, Mermaid, etc.) and Licensed Themes (Disney, Barbie, etc.)

Each category has:

- `name`: Display name
- `slug`: URL-friendly identifier
- `count`: Number of products in this category (optional)
- `image`: Path to category image (displayed in mega menu)

### `products.ts`

Contains product data with:

- Product information (name, price, description, images)
- Category associations
- Stock information
- Tags and metadata

Includes helper functions:

- `getProductBySlug()`: Get a single product
- `getProductsByCategory()`: Filter products by category
- `getFeaturedProducts()`: Get all featured products
- `searchProducts()`: Search products by query
- `getProductsByPriceRange()`: Filter by price range

## Usage

### Import categories:

```typescript
import { categoryData, getAllCategories } from "@/data/categories";
```

### Import products:

```typescript
import {
  products,
  getProductBySlug,
  getProductsByCategory,
} from "@/data/products";
```

## Managing Data

### Adding a Category

1. Open `data/categories.ts`
2. Find the appropriate section (byType, byOccasion, etc.)
3. Add your category object with `name`, `slug`, `count`, and `image`
4. Add the corresponding image to `public/images/` folder
5. The mega menu will automatically update

### Adding a Product

1. Open `data/products.ts`
2. Add a new product object to the `products` array
3. Include all required fields (see `Product` interface)
4. Link to categories using the appropriate category slugs

## Benefits

✅ Centralized data management
✅ Easy to maintain and update
✅ Type-safe with TypeScript interfaces
✅ Reusable across the entire application
✅ No need to modify component files
