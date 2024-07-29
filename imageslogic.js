let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll(".carousel-slide img");
  slideIndex += n;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  const carousel = document.querySelector(".carousel");
  const slideWidth = slides[0].clientWidth;
  carousel.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

// Auto slide (optional)
setInterval(() => {
  moveSlide(1);
}, 7000);
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
