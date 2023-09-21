const products = [{
        image: "/images/shop/exampleOfProduct.png",
        description: "Jednoczęściowa konstrukcja belkowa 50x50x2000 mm sosna",
        price: 7,
        product_id: 1,
    },
    {
        image: "/images/shop/exampleOfProduct.png",
        description: "Jednoczęściowa konstrukcja belkowa 50x50x2000 mm sosna",
        price: 7,
        product_id: 2,
    },
    {
        image: "/images/shop/exampleOfProduct.png",
        description: "Jednoczęściowa konstrukcja belkowa 50x50x2000 mm sosna",
        price: 7,
        product_id: 3,
    },
    {
        image: "/images/shop/exampleOfProduct.png",
        description: "Jednoczęściowa konstrukcja belkowa 50x50x2000 mm sosna",
        price: 7,
        product_id: 4,
    },
    {
        image: "/images/shop/exampleOfProduct.png",
        description: "Jednoczęściowa konstrukcja belkowa 50x50x2000 mm sosna",
        price: 7,
        product_id: 5,
    },
    {
        image: "/images/shop/exampleOfProduct.png",
        description: "Jednoczęściowa konstrukcja belkowa 50x50x2000 mm sosna",
        price: 7,
        product_id: 6,
    },
    {
        image: "/images/shop/exampleOfProduct.png",
        description: "Jednoczęściowa konstrukcja belkowa 50x50x2000 mm sosna",
        price: 7,
        product_id: 7,
    },
    {
        image: "/images/shop/exampleOfProduct.png",
        description: "Jednoczęściowa konstrukcja belkowa 50x50x2000 mm sosna",
        price: 7,
        product_id: 8,
    },
    {
        image: "/images/shop/exampleOfProduct.png",
        description: "Jednoczęściowa konstrukcja belkowa 50x50x2000 mm sosna",
        price: 7,
        product_id: 9,
    },
    {
        image: "/images/shop/exampleOfProduct.png",
        description: "Jednoczęściowa konstrukcja belkowa 50x50x2000 mm sosna",
        price: 7,
        product_id: 10,
    },
    {
        image: "/images/shop/exampleOfProduct.png",
        description: "Jednoczęściowa konstrukcja belkowa 50x50x2000 mm sosna",
        price: 7,
        product_id: 11,
    },
    {
        image: "/images/shop/exampleOfProduct.png",
        description: "Jednoczęściowa konstrukcja belkowa 50x50x2000 mm sosna",
        price: 7,
        product_id: 12,
    }
]





function createMarkup(arr) {
    return arr.map(({ image, description, price, product_id }) => `
  <li class="products-item">
    <img class="product-img" src="${image}" data-id="${product_id}" width="320" height="230">
    <p class="product-description">"${description}"</p>
    <div>
        <p class="product-price">${price} PLN</p>
        <button class="product-buy-button button">zamówić</button>
    </div>
    
  </li>
  `).join("")
}

const gallery = document.querySelector(".product-list")
gallery.insertAdjacentHTML("beforeend", createMarkup(products))