const data = `{
  "brand": "Nike",
  "produk": "Shoes",
  "detail": {
    "name": "Nike Running LK21",
    "color": "White Blue",
    "size": 44
  },
  "totalSale": 21,
  "isReady": true
}`;

const dataJson = JSON.parse(data);

// Cara Akses
dataJson.brand;