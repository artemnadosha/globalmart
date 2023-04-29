import fs from "fs/promises";
import path from "path";
import { testFunc } from "./uploadImages.js";

const productsFilePath = path.resolve("./server/products.json");
const checkoutFilePath = path.resolve("./server/checkout.json");
const dbFilePath = path.resolve("./server/db.json");

async function main() {
  try {
    const productsData = await fs.readFile(productsFilePath, "utf8");
    const products = JSON.parse(productsData).products;
    const checkoutData = await fs.readFile(checkoutFilePath, "utf8");
    const checkout = JSON.parse(checkoutData).checkout;

    const dbData = await fs.readFile(dbFilePath, "utf8");
    const db = JSON.parse(dbData);

    const productsInfo = products.reduce((acc, product) => {
      const categoryIndex = acc.findIndex(
        (item) => item.category === product.category
      );
      const brandItem = acc.find((item) => item.brand === product.brand);

      if (categoryIndex === -1) {
        acc.push({
          category: product.category,
          subCategories: [product.subCategory],
          brand: [product.brand],
        });
      } else {
        const subCategoryIndex = acc[categoryIndex].subCategories.findIndex(
          (item) => item === product.subCategory
        );
        if (subCategoryIndex === -1) {
          acc[categoryIndex].subCategories.push(product.subCategory);
        }
        if (!brandItem) {
          acc[categoryIndex].brand.push(product.brand);
        }
      }

      return acc;
    }, []);

    db.products = products;
    db["products-info"] = productsInfo;
    db.checkout = checkout;

    await fs.writeFile(dbFilePath, JSON.stringify(db));
    console.log("Products added to db.json");
  } catch (err) {
    console.error(err);
  }
}

main();
