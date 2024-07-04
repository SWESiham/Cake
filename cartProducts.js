let ProductsInCart = localStorage.getItem("ProductsInCart");
let allProducts = document.querySelector(".products");

if (ProductsInCart) {
  let items = JSON.parse(ProductsInCart);
  drawCartProducts(items);
}

function drawCartProducts(items) {
  let y = items.map((item, index) => {
    return `
      <div class="product-item">
        <img src="${item.imgURL}" alt="">
        <div class="product-item-desc">
          <h2>${item.title}</h2>
          <p>${item.desc}</p>
          <span>${item.Flavors}</span>
        </div>
        <div class="product_item_action">
          <button class="remove_to_cart" onClick="removeFromCart(${index})" style="margin-left: 80px;">Remove From Cart</button>
        </div>
      </div>
    `;
  });
  allProducts.innerHTML = y.join("");
}

function removeFromCart(productId) {
  if (ProductsInCart) {
    let items = JSON.parse(ProductsInCart);
    let updatedItems = items.filter((item, index) => index !== productId);
    localStorage.setItem("ProductsInCart", JSON.stringify(updatedItems));
    location.reload(); 
  }
}
