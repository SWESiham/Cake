/////////////////////////////////////////////////////
let allproducts = document.querySelector(".products");

let products = [
  {
    id: 1,
    title: "Pink Cake",
    desc: "Lorem ipsum dolor sit amet consectet",
    Flavors: "Strawberry",
    imgURL:
      "./imgs/Top Comic Cake Designs and Amazing Cake Decorating Ideas decide how much you re willing to spend on.jpeg",
  },
  {
    id: 2,
    title: "Pink Cake",
    desc: "Lorem ipsum dolor sit amet consectet",
    Flavors: "Strawberry",
    imgURL:
      "./imgs/decide how much you re willing to spend on the wedding cake wedding cakes can very widely in price.jpeg",
  },
  {
    id: 3,
    title: "Pink Cake",
    desc: "Lorem ipsum dolor sit amet consectet",
    Flavors: "Strawberry",
    imgURL: "./imgs/Black Birthday Cake!.jpeg",
  },
  {
    id: 4,
    title: "Pink Cake",
    desc: "Lorem ipsum dolor sit amet consectet",
    Flavors: "Strawberry",
    imgURL: "./imgs/0c787bbc-6628-42dd-b507-92fe00477b71.jpeg",
  },
  {
    id: 5,
    title: "Pink Cake",
    desc: "Lorem ipsum dolor sit amet consectet",
    Flavors: "Strawberry",
    imgURL: "./imgs/Simple and Stunning Cakes for Every Occasion.jpeg",
  },
  {
    id: 6,
    title: "Pink Cake",
    desc: "Lorem ipsum dolor sit amet consectet",
    Flavors: "Strawberry",
    imgURL:
      "./imgs/20 Pictures Of Cakes That Truly Capture The Full Spectrum Of Cake Mastery And Disastery.jpeg",
  },
  {
    id: 7,
    title: "Pink Cake",
    desc: "Lorem ipsum dolor sit amet consectet",
    Flavors: "Strawberry",
    imgURL: "./imgs/f83f23ee-5958-4de2-9ffd-115758fbb02b.jpeg",
  },
  {
    id: 8,
    title: "Pink Cake",
    desc: "Lorem ipsum dolor sit amet consectet",
    Flavors: "Strawberry",
    imgURL:
      "./imgs/Top Comic Cake Designs and Amazing Cake Decorating Ideas40+ awesome birthday cakes ideas.jpeg",
  },
];
function drawItems() {
  let y = products.map((item) => {
    return ` <div class="product-item">
    <img src="${item.imgURL}" alt="">
    <div class="poduct-item-desc">
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
        <span>${item.Flavors}</span>

    </div>
    <div class="product-item-action">
        <button class="add-to-cart" onClick="addToCart(${item.id})">Add To Cart</button>
        <i class="fa-regular fa-heart fav"></i>
    </div>

</div>`;
  });
  allproducts.innerHTML = y;
}
drawItems();

function check() {
  if ((localStorage.getItem == "username")) {
    window.location = "cartProducts.html";
  } else {
    window.location = "login.html";
  }
}
function addToCart(id) {
  let choosenItem = products.find((item) => item.id === id);
  addItem = [...addItem, choosenItem];
  localStorage.setItem("ProductsInCart", JSON.stringify(addItem));
  cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;

  if (cartProductDiv.innerHTML != "") {
    badgeCounter.style.display = "block";
    badgeCounter.innerHTML++;
  }
}
let cartProductDiv = document.querySelector(".carts-products div");
let cartProducts = document.querySelector(".carts-products");
let badgeCounter = document.querySelector(".badge");
// let addItem = [];
let addItem = localStorage.getItem("ProductsInCart")
  ? JSON.parse(localStorage.getItem("ProductsInCart"))
  : [];
if (addItem) {
  addItem.map((item) => {
    cartProductDiv.innerHTML += `<p>${item.title}</p>`;
  });
  badgeCounter.style.display = "block";
  badgeCounter.innerHTML = addItem.length;
}

let shoppingCart = document.querySelector(".shopping-cart");
shoppingCart.addEventListener("click", openCart);
function openCart() {
  if (cartProductDiv.innerHTML != "") {
    if (cartProducts.style.display == "block") {
      cartProducts.style.display = "none";
    } else {
      cartProducts.style.display = "block";
    }
  } else {
    if (cartProducts.style.display == "block") {
      cartProducts.style.display = "none";
    } else {
      cartProducts.style.display = "block";
    }
  }
}
