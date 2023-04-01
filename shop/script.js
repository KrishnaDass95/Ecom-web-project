// const produtc = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: { rate: 3.9, count: 120 },
// };
const menSection = document.querySelector('.men');
const womenSection = document.querySelector('women');
const jewelerySection = document.querySelector("jewelery");
const electronicsSection = document.querySelector("electronics");



function renderUI(image, name, price, rating){
  return `<div class="item">
  <img src="${image}" alt="Item" />
  <div class="info">
    <div class="row">
      <div class="price">$${price}</div>
      <div class="sized">S,M,L</div>
      <div class="name">${name}</div>
    </div>
    <div class="colors">
      Colors:
      <div class="row">
        <div class="circle" style="background-color: #000"></div>
        <div class="circle" style="background-color: #4938af"></div>
        <div class="circle" style="background-color: #203d3e"></div>
      </div>
    </div>
    <div class="row">Rating:${rating}</div>
  </div>
  <button id="addBtn">Add to Cart</button>
</div>`
}



fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let stringifiedData = JSON.stringify(data);
    localStorage.setItem('products', stringifiedData);
    data.forEach((item) => {
    if(item.category = "men's clothing"){
      let mensElement = renderUI(item.image, item.name, item.price, item.rating);
      menSection.innerHTML += mensElement;
    }
    })









  }).catch((error) => {
    console.log('error message', error);
  })



console.log('shop page');
const searchBarElement = document.getElementById('search-field');

function search(event){
  const searchTerm = event.target.value;
  console.log(searchTerm);
}


searchBarElement.addEventListener("change", search);
