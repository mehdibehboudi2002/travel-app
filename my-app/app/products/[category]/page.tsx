"use client";
import ShopProducts from "@/components/Shop/products";
import { SHOP_CATEGORIES } from "@/constants";

export async function generateStaticParams() {
  const categories = SHOP_CATEGORIES.categories.map(cat => cat.category);

  return categories.map(category => ({
    category,
  }));
}

const ShopProductsByCategory = () => {
  return <ShopProducts />;
};

export default ShopProductsByCategory;
