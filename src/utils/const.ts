import { TypeProduct } from "../types/TypeProduct";

export const lorem: Record<string, string> = {
  lorem10:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, maiores?",
  lorem20:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi odio, voluptates? Deserunt eaque eveniet harum officiis, quibusdam temporibus vitae! Cupiditate!",
  lorem30:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At debitis exercitationem molestiae. Asperiores error est expedita illo necessitatibus numquam odio quasi quo rerum, sit sunt tenetur ut veniam vitae voluptatibus?",
};

export const defaultStateProduct: TypeProduct = {
  brand: "Apple",
  category: "smartphones",
  description: "An apple mobile which is nothing like apple",
  discountPercentage: 12.96,
  id: 1,
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
  price: 549,
  rating: 4.69,
  stock: 94,
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  title: "iPhone 9",
};

type TypeRoutes = {
  HOME: string;
  PRODUCTS: string;
  PRODUCT_CATEGORIES: string;
  PRODUCT: string;
  CART: string;
  FAVORITE: string;
  CHECKOUT: string;
};
export const ROUTES: TypeRoutes = {
  HOME: "/",
  PRODUCTS: "products",
  PRODUCT_CATEGORIES: ":categories",
  PRODUCT: "/products/:categories/:id",
  CART: "cart",
  FAVORITE: "favorite",
  CHECKOUT: "checkout",
};

export const SERVICES_LINK = {
  PRODUCTS: "products",
  CATEGORIES: "products/categories",
  PRODUCT_CATEGORY: "products/category",
};
