const express = require("express");
const axios = require("axios");
const cors = require("cors");
const  shopifyConfig  = require("../config"); 

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


  const fetchProducts = async (pageInfo = null) => {
    const url = `https://${shopifyConfig.shopName}/admin/api/${shopifyConfig.apiVersion}/products.json`;
    const params = pageInfo ? { page_info: pageInfo, limit: 250 } : { limit: 250 };
    const headers = {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': shopifyConfig.accessToken,
    };
  
    try {
      const response = await axios.get(url, { params, headers });
      return response;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };

  const getAllProducts = async () => {
    let allProducts = [];
    let pageInfo = null;
    let hasNextPage = true;
  
    while (hasNextPage) {
      const response = await fetchProducts(pageInfo);
      const products = response.data.products;
      allProducts = allProducts.concat(products);
  
      const linkHeader = response.headers['link'];
      if (linkHeader) {
        const match = linkHeader.match(/<([^>]+)>;\s*rel="next"/);
        pageInfo = match ? new URL(match[1]).searchParams.get('page_info') : null;
        hasNextPage = !!pageInfo;
      } else {
        hasNextPage = false;
      }
    }
  
    return allProducts;
  };
  
  getAllProducts()
    .then(products => {
    //  console.log(`Total products fetched: ${products.length}`);
     // console.log(products);
         // Filtrar productos activos con inventory_quantity mayor a 1
    const filteredProducts = products.filter((product) => {
      return (
        product.status === "active" &&
        product.variants[0].inventory_quantity > 0
      );
    });
  //  console.log('productos filtrados', filteredProducts);
      res.json(filteredProducts);
    })
    .catch(error => {
      console.error('Failed to fetch all products:', error);
    });
  // const apiUrl = `https://${shopifyConfig.shopName}/admin/api/${shopifyConfig.apiVersion}/products.json`;
  // const axiosConfig = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     "X-Shopify-Access-Token": shopifyConfig.accessToken,
  //   },
  // };

  // try {
  //   const response = await axios.get(apiUrl, axiosConfig);
  //   const allProducts = response.data.products;
  //  // console.log('todos los productos', allProducts);

  //   // Filtrar productos activos con inventory_quantity mayor a 1
  //   const filteredProducts = allProducts.filter((product) => {
  //     return (
  //       product.status === "active" &&
  //       product.variants[0].inventory_quantity > 0
  //     );
  //   });
  // //  console.log('productos filtrados', filteredProducts);

  //   res.json(filteredProducts);
  // } catch (error) {
  //   console.error("Error:", error.message);
  //   res.status(500).send({ error: "Internal Server Error" });
  // }
});

app.post("/cart", async (req, res) => {
  const items = req.body.items;
 // const shopifyStoreUrl = "berrots-life.myshopify.com"; // Reemplaza 'your-shop-name' con el nombre de tu tienda
  const storefrontAccessToken = shopifyConfig.storefrontAccessToken;

  const lineItems = items.map((item) => {
    return `{ variantId: "${item.variantId}", quantity: ${item.quantity} }`;
  });

  const consulta =  `
  mutation {
    checkoutCreate(input: {
      lineItems: [${lineItems.join(',')}]
    })  {
      checkout {
        id
        webUrl
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`;

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

 
      //console.log("Data returned:\n", response.data);
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
