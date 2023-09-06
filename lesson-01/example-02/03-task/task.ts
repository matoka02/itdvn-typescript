const iceCream = {
  'small': {
    'price': 10
  },
  'big': {
    'price': 25,
    'toppings': {
      'chocolate': 5,
      'caramel': 6,
      'berries': 10
    }
  },
  'marshmallow': {
    'price': 5
  }

};

let buyIceCream = (): void => {
  let price: number = 0;
  let type: string = prompt('Small or large portion?', 'small');
  switch (type) {
    case 'small':
      price = price + iceCream.small.price;
      break;
    case 'big':
      price = price + iceCream.big.price + choseToppings();
      break;
  }
  let marshmallow: string = prompt('Add marshmallows?');
  if (marshmallow == 'yes') {
    price = price + iceCream.marshmallow.price;
  }
  alert(`Ice cream price ${price} hryvnia`);
  };

let choseToppings = (): number => {
  let toppingsPrice: number = 0;
  let toppingsList: string = prompt('Choose toppings. Available: chocolate, caramel, berries', 'chocolate');

  let countToppingPrice = () => {
    let toppingsArr = toppingsList.split(', ');
    for (let i = 0; i < toppingsArr.length; i++) {
      switch (toppingsArr[i]) {
        case 'chocolate':
          toppingsPrice = toppingsPrice + iceCream.big.toppings.chocolate;
          break;
        case 'caramel':
          toppingsPrice = toppingsPrice + iceCream.big.toppings.caramel;
          break;
        case 'berry':
          toppingsPrice = toppingsPrice + iceCream.big.toppings.berries;
          break;
        default:
          validateToppingsList();
          break;
      }
    }
  };

  let validateToppingsList = () => {
    toppingsList = prompt('You must choose one of toppings. Available: chocolate, caramel, berry.', 'chocolate');
    countToppingPrice();
  };

  if (toppingsList == undefined) {
    validateToppingsList();
  } else {
    countToppingPrice();
  }

  return toppingsPrice;
};

buyIceCream();





