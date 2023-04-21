import fs from "fs/promises";
import path from "path";

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

    const categories = products.reduce((acc, product) => {
      if (!acc.includes(product.category)) {
        acc.push(product.category);
      }
      return acc;
    }, []);

    db.products = products;
    db.categories = categories;
    db.checkout = checkout;

    await fs.writeFile(dbFilePath, JSON.stringify(db));
    console.log("Products added to db.json");
  } catch (err) {
    console.error(err);
  }
}

main();
