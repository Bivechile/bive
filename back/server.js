const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { shopifyConfig } = require("../config"); 

const app = express();
app.use(express.json());
const PORT = 4000;



app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.send("<h1>¡Hola!</h1>");
});

app.get("/products", async (req, res) => {
  const apiUrl = `https://${shopifyConfig.shopName}/admin/api/${shopifyConfig.apiVersion}/products.json?since_id=0`;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": shopifyConfig.accessToken,
      Authorization: `Basic ${Buffer.from(
        `${shopifyConfig.apiKey}:${shopifyConfig.password}`
      ).toString("base64")}`,
    },
  };

  try {
    const response = await axios.get(apiUrl, axiosConfig);
    const allProducts = response.data.products;
   // console.log('todos los productos', allProducts);

    // Filtrar productos activos con inventory_quantity mayor a 1
    const filteredProducts = allProducts.filter((product) => {
      return (
        product.status === "active" &&
        product.variants[0].inventory_quantity > 0
      );
    });
  //  console.log('productos filtrados', filteredProducts);

    res.json(filteredProducts);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.post("/cart", async (req, res) => {
  const items = req.body.items;
  const storefrontAccessToken = shopifyConfig.storefrontAccessToken;

  const lineItems = items.map((item) => {
    return `{ variantId: "${item.variantId}", quantity: ${item.quantity} }`;
  });

  const consulta = `mutación { checkoutCreate(input: { lineItems: [{ variantId: "gid://shopify/ProductVariant/47433046130985", quantity: 1 }] }) { checkout { id webUrl } checkoutUserErrors { code field message } } }`;

  try {
    const response = await axios.post(
      `https://${shopifyConfig.shopName}/api/2021-04/graphql.json`,
      {
        query: consulta,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
        },
      }
    );

 
      console.log("Data returned:\n", response.data);
      // console.log('error', response.data.data.checkoutCreate.checkoutUserErrors[0].field);
      // Si la creación del checkout fue exitosa, redirige al cliente a la URL de la tienda Shopify
      res.json({
        redirectUrl: response.data.data.checkoutCreate.checkout.webUrl,
      });
   
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Node.js corriendo en http://localhost:${PORT}`);
});
