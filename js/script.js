const addToCartButton = document.querySelector(".btnstyle");

addToCartButton?.addEventListener("click", () => {
  gtag("event", "add_to_cart", {
    currency: "新台幣",
    value: 1234,
    items: [
      {
        item_id: "SKU_12345",
        item_name: "花香淺焙",
        affiliation: "巨匠咖啡",
        index: 0,
        item_brand: "巨匠咖啡",
        item_category: "咖啡豆",
        item_list_id: "products",
        item_list_name: "產品介紹",
        price: 1234,
        quantity: 1
      }
    ]
  });

  alert("您已將商品加入購物車");
});
