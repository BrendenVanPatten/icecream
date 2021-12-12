const products = [{
  id: 1,
  name: 'Chocolate',
  price: 2.50,
  imgUrl: 'https://static.toiimg.com/thumb/53503016.cms?width=1200&height=900',
},
{
  id: 2,
  name: 'Vanilla',
  price: 2.50,
  imgUrl: 'https://saltandbaker.com/wp-content/uploads/2018/05/homemade-vanilla-ice-cream-recipe-2-500x500.jpg',
},
{
  id: 3,
  name: 'Strawberry',
  price: 2.50,
  imgUrl: 'https://sugarfreelondoner.com/wp-content/uploads/2021/05/keto-Strawberry-Ice-cream-1200.jpg',
},
{
  id: 4,
  name: 'Oreo',
  price: 3.00,
  imgUrl: 'https://gimmethatflavor.com/wp-content/uploads/2020/07/Cookies-and-Cream-Ice-Cream-11.jpg',
},
{
  id: 5,
  name: 'Toppings',
  price: 1.50,
  imgUrl: 'https://www.tropicalfoods.com/wp-content/uploads/2018/07/IceCreamToppings.png',
},
{
  id: 6,
  name: 'Syrups',
  price: 2.00,
  imgUrl: 'https://media02.stockfood.com/largepreviews/MzQ5NzM3Mzgx/11281851-Four-ice-cream-cones-with-chocolate-syrup.jpg',
},

]
let icecream = 0
const cart = []


function drawMenu() {
  let template = ''
  products.forEach(prod => {
    template += `
      <div class="col-6 p-2">
            <div class="bg-white p-3 shadow rounded" onclick="addToCart(${prod.id})">
              <img class="img-1 product" src="${prod.imgUrl}" alt="${prod.name}">
              <div class="d-flex justify-content-between mt-3">
                <p>${prod.name}</p>
                <p>$${prod.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
          `
  })
  document.getElementById('menu').innerHTML = template
}

function drawCart() {
  let template = ''
  let total = 0
  cart.forEach((prod, i) => {
    total += prod.price
    template += `
    <div class="d-flex justify-content-between border-bottom">
    <p>${prod.name}</p>
    <p>$${prod.price.toFixed(2)}</p>
    </div>
    `
  })
  document.getElementById('cart').innerHTML = template
  document.getElementById('total').innerHTML = total.toFixed(2)
  document.getElementById('modal-total').innerHTML = total.toFixed(2)
  document.getElementById('modal-cart').innerHTML = template
}

function addToCart(id) {
  const order = products.find(prod => prod.id === id)
  if (order.name === 'icecream') {

  }
  cart.push(order)
  drawCart()


}
// @ts-ignore
// document.getElementById('exampleModal').disabled = false

function checkout() {
  cart.length = 0
  drawCart()
  // viewCart()


  // @ts-ignore
  // document.getElementById('checkout-button').disabled = true
}

function viewCart() {


  let template = ''
  let total = 0
  cart.forEach((prod, i) => {
    total += prod.price
    template += `
    <div class="d-flex justify-content-between border-bottom">
    <p>${prod.name}</p>
    <p>$${prod.price.toFixed(2)}</p>
    </div>
    `
  })
  document.getElementById('cart').innerHTML = template
  document.getElementById('total').innerHTML = total.toFixed(2)
  document.getElementById('modal-total').innerHTML = total.toFixed(2)
  document.getElementById('modal-cart').innerHTML = template

}









drawMenu()