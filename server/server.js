import fs from "fs/promises";
import path from "path";
import jsonServer from "json-server";
import express from "express";
import dotenv from 'dotenv'

dotenv.config()

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

      if (categoryIndex === -1) {
        acc.push({
          category: product.category,
          total: 1,
          subCategories: [
            {
              name: product.subCategory,
              total: 1,
              brands: [{ name: product.brand, total: 1 }],
            },
          ],
          brandsAll: [product.brand],
        });
      } else {
        const subCategoryIndex = acc[categoryIndex].subCategories.findIndex(
          (item) => item.name === product.subCategory
        );

        if (subCategoryIndex === -1) {
          acc[categoryIndex].subCategories.push({
            name: product.subCategory,
            total: 1,
            brands: [{ name: product.brand, total: 1 }],
          });
        } else {
          const brandIndex = acc[categoryIndex].subCategories[
            subCategoryIndex
          ].brands.findIndex((item) => item.name === product.brand);

          if (brandIndex === -1) {
            acc[categoryIndex].subCategories[subCategoryIndex].brands.push({
              name: product.brand,
              total: 1,
            });
          } else {
            acc[categoryIndex].subCategories[subCategoryIndex].brands[
              brandIndex
            ].total++;
          }

          acc[categoryIndex].subCategories[subCategoryIndex].total++;
        }

        const brandIndex = acc[categoryIndex].brandsAll.findIndex(
          (item) => item === product.brand
        );

        if (brandIndex === -1) {
          acc[categoryIndex].brandsAll.push(product.brand);
        }

        acc[categoryIndex].total++;
      }

      return acc;
    }, []);

    db.products = products;
    db["products-info"] = productsInfo;
    db.checkout = checkout;

    await fs.writeFile(dbFilePath, JSON.stringify(db));
    console.log("Products added to db.json");

    const server = jsonServer.create();
    const router = jsonServer.router(dbFilePath);
    const middlewares = jsonServer.defaults();

    const port = process.env.PORT || 4001;

    server.use(middlewares);

    const imagePath = path.resolve("./server/images");
    const app = express();
    app.get("/images/:dirName/:fileName", (req, res) => {
      const { dirName, fileName } = req.params;
      const filePath = path.join(imagePath, dirName, fileName); // собираем полный путь до файла
      res.sendFile(filePath);
    });

    server.use(app);
    server.use(router);

    server.listen(port, () => {
      console.log(`JSON Server is running on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

await main();
