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
  id: 0,
  brand: "",
  rating: 0,
  category: "",
  price: 0,
  discountPercentage: 0,
  thumbnail: "",
  images: [],
  description: "",
  stock: 0,
  title: "",
};

type TypeRoutes = {
  HOME: string;
  PRODUCT: string;
};
export const routes: TypeRoutes = {
  HOME: "/",
  PRODUCT: "/:id",
};
