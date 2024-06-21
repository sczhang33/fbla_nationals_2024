let cartQuantity = 0;
let donutOrder = [];
let total = 0;

function updateCartQuantity(change, donutName, donutPrice) {
  if (cartQuantity + change > 100) {
    alert("The cart is full");
    return;
  }

  cartQuantity += change;

  document.querySelector(
    ".js-cart-quantity"
  ).innerHTML = `Cart Quantity: ${cartQuantity}`;

  donutOrder.push({ name: donutName, price: donutPrice });
  renderDonutList();
  updateTotal(donutPrice);
}

function renderDonutList() {
  let donutListHTML = '';
  for (let i = 0; i < donutOrder.length; i++) {
    const donut = donutOrder[i];
    const html = `
    <div>${donut.name}</div>
    <div>$${(donut.price / 100).toFixed(2)}</div>
    <button class="delete-button js-delete-button" onclick="
      donutOrder.splice(${i}, 1);
      deleteDonutFromCart(${donut.price});
      renderDonutList();
    ">Delete</button>
    `;
    donutListHTML += html;
  }

  document.querySelector('.js-donut-order').innerHTML = donutListHTML;
}

function updateTotal(change) {
  total += change;
  console.log(change);
  document.querySelector('.js-total').innerHTML = `Total: $${(total / 100).toFixed(2)}`;
}

function deleteDonutFromCart(donutPrice) {
  cartQuantity -= 1;
  document.querySelector(
    ".js-cart-quantity"
  ).innerHTML = `Cart Quantity: ${cartQuantity}`;
  updateTotal(-donutPrice);
}

function resetCart() {
  document.querySelector('.js-warning').innerHTML = `
  Are you sure you want to reset the cart? 
  <button class="js-yes yes-button">Yes</button>
  <button class="js-no no-button">No</button>
  `;
  document.querySelector('.js-yes').addEventListener('click', () => {
    cartQuantity = 0;
    document.querySelector('.js-cart-quantity').innerHTML = `Cart Quantity: ${cartQuantity}`;
    donutOrder = [];
    document.querySelector('.js-donut-order').innerHTML = '';
    total = 0;
    document.querySelector('.js-total').innerHTML = `Total: $${(total / 100).toFixed(2)}`;
    document.querySelector('.js-warning').innerHTML = ``;
  });

  document.querySelector('.js-no').addEventListener('click', () => {
    document.querySelector('.js-warning').innerHTML = ``;
  });
}

document.querySelector('.js-reset-cart').addEventListener('click', () => {
  resetCart();
});

document.querySelector('.js-place-order').addEventListener('click', () => {
  document.querySelector('.js-cart-container').innerHTML = `
  <div class="order-placed">Order has been placed!</div>
  `;
  setTimeout(() => {
    document.querySelector('.js-place-order-message').innerHTML = `
    Making the order...
    `;
  }, 2000);

  setTimeout(() => {
    document.querySelector('.js-finished-order-message').innerHTML = `
    Order has been completed!`;
  }, 4000);

  setTimeout(() => {
    document.querySelector('.js-delivering').innerHTML = `
    Delivering...`;
  }, 6000);

  setTimeout(() => {
    document.querySelector('.js-delivered').innerHTML = `
    Delivered!`;
  }, 8000);
});
