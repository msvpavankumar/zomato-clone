const order = document.querySelector('.order');
const items = document.querySelectorAll('.btn-primary');
const addItems = document.querySelector('.btn-secondary');
let selectedItems = [];
let statement = document.createElement('h2');

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
  if (item !== '') {
    selectedItems.push(item);
  }
  statement.innerHTML = '';
}

function totalPrice() {
  statement.innerHTML = '';
  if (selectedItems.length === 0) {
    return;
  }
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
  statement.className = 'final-heading';
  statement.innerHTML = 'Your total order price is $' + total;
  statement.style.paddingTop = '20px';
  order.appendChild(statement);

  selectedItems = [];
  total = 0;
}

// Events
items.forEach((item) => {
  item.addEventListener('click', allItems);
});

addItems.addEventListener('click', totalPrice);
