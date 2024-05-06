const order = document.querySelector('.order');
const items = document.querySelectorAll('.btn-primary');
const addItems = document.querySelector('.btn-secondary');
const selectedItems = [];

// Items price
const pizza = 10;
const burger = 5.99;
const biryani = 7.32;
const coke = 3.5;
const iceCream = 8;
const rasagulla = 3.5;
let total = 0;

// Functions
function allItems(e) {
  const item = e.target.textContent
    .substring(0, e.target.textContent.indexOf('-'))
    .trim()
    .toLowerCase();
  selectedItems.push(item);
}

function totalPrice() {
  for (let i = 0; i < selectedItems.length; i++) {
    switch (selectedItems[i]) {
      case 'pizza':
        total += pizza;
        break;
      case 'burger':
        total += burger;
        break;
      case 'biryani':
        total += biryani;
        break;
      case 'coke':
        total += coke;
        break;
      case 'ice cream':
        total += iceCream;
        break;
      case 'rasagulla':
        total += rasagulla;
    }
  }
  // console.log(total);
  const h2 = document.createElement('h2');
  h2.className = 'final-heading';
  h2.innerHTML = 'Your total order price is $' + total;
  h2.style.paddingTop = '20px';
  order.appendChild(h2);
}

// Events
items.forEach((item) => {
  item.addEventListener('click', allItems);
});

addItems.addEventListener('click', totalPrice);
