// import React from 'react';

// const AddToCartButton = ({ productId, quantity }) => {

//   app.post('/cart', async (req, res) => {

//     const  apiKey= '170745de602802ade93fac535200bf51';
//     const password = 'c0d2e05b05e7fbef8c064d1d7d0f80d4';
//     const access_token='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';
//     //const storefront_access_token='101f5b5c3037a1ade6b52b7f559fa29e';
  
  
    
//     const shopifyStoreUrl = 'berrots-life.myshopify.com'; // Reemplaza 'your-shop-name' con el nombre de tu tienda
//     const storefrontAccessToken='101f5b5c3037a1ade6b52b7f559fa29e'; 
  
  
  
//   // IDs de productos que deseas agregar al carrito
//   const productIds = ['47433045868841'];
//   const quantities = [1]; // Cantidades correspondientes a los productos
//   const consulta = `
//     mutation {
//       checkoutCreate(input: {
//         lineItems: [{ variantId:"gid://shopify/ProductVariant/44857058623785", quantity: 1 }]
//       }) {
//         checkout {
//           id
//           webUrl
//         }
//         checkoutUserErrors {
//           code
//           field
//           message
//         }
//       }
//     }
//   `;
  
//   fetch(`https://${shopifyStoreUrl}/api/2021-04/graphql.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Shopify-Storefront-Access-Token': storefrontAccessToken
//     },
//     body: JSON.stringify({ query: consulta })
//   })
//     .then(response => response.json())
//     .then(data => console.log('Data returned:\n',  data.data))
//     .catch(error => console.error('Error:', error));
  

//   });
  

//   return (
//     <button onClick={addToCart}>
//       Agregar al carrito
//     </button>
//   );
// };

// export default AddToCartButton;
