function openNav() {
  document.querySelector(".toggle").style.display = "none";
  document.querySelector("aside").style.display = "flex";
  document.querySelector(".homeright").style.display = "none";
  document.querySelector(".home").style.width = "63%";
}
function closeNav() {
  document.querySelector("aside").style.display = "none";
  document.querySelector(".toggle").style.display = "flex";
  document.querySelector(".homeright").style.display = "block";
  document.querySelector(".home").style.width = "100%";
}
function openLogin() {
  document.querySelector("#login").style.display = "flex";
  document.querySelector(".toggle").style.display = "none";
  document.querySelector("aside").style.display = "none";
  document.querySelector(".homeright").style.display = "none";
  document.querySelector(".home").style.width = "63%";
}
function closeLogin() {
  document.querySelector("#login").style.display = "none";
  document.querySelector(".toggle").style.display = "none";
  document.querySelector("aside").style.display = "none";
  document.querySelector(".homeright").style.display = "block";
  window.location.reload();
  document.querySelector(".home").style.width = "100%";
}

function openRegister() {
  document.querySelector("#register").style.display = "flex";
  document.querySelector(".toggle").style.display = "none";
  document.querySelector("aside").style.display = "none";
  document.querySelector(".homeright").style.display = "none";
  document.querySelector(".home").style.width = "63%";
}
function closeRegister() {
  document.querySelector("#register").style.display = "none";
  document.querySelector(".toggle").style.display = "flex";
  document.querySelector("aside").style.display = "none";
  document.querySelector(".homeright").style.display = "flex";
  document.querySelector(".home").style.width = "100%";
}
function forTabFun() {
  document.querySelector("#forgot").style.display = "flex";
  document.querySelector(".toggle").style.display = "none";
  document.querySelector("aside").style.display = "none";
  document.querySelector(".homeright").style.display = "none";
}
let cart = [];

function addToCart(gameName, price) {
  cart.push({ gameName, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.gameName} - $${item.price.toFixed(2)}`;
    li.appendChild(createRemoveButton(index));
    cartItems.appendChild(li);
  });

  document.getElementById("cart-total").textContent = total.toFixed(2);
}

function createRemoveButton(index) {
  const button = document.createElement("button");
  button.textContent = "Remove";
  button.onclick = () => {
    cart.splice(index, 1);
    updateCart();
  };
  return button;
}

function checkout() {
  alert(
    `Checkout - Total: $${cart
      .reduce((acc, item) => acc + item.price, 0)
      .toFixed(2)}`
  );
  cart = [];
  updateCart();
}
