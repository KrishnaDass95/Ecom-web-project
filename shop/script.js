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
const womenSection = document.querySelector('.women');
const jewelerySection = document.querySelector(".jewelery");
const electronicsSection = document.querySelector(".electronics");

// DO ALL THE FILTERS

function renderUI(image, name, price, rating){
  return `<div class="item">
  <img src="${image}" alt="Item" />
  <div class="info">
    <div class="row">
      <div class="price">$${price}</div>
      <div class="name">${name}</div>
      <div class="row rating">Rating: ${rating}</div>
    </div>
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
    if(item.category == "men's clothing"){
      let mensElement = renderUI(item.image, item.title, item.price, item.rating.rate);
      menSection.innerHTML += mensElement;
    }
    else if(item.category == "women's clothing"){
      let ladyElement = renderUI(item.image, item.title, item.price, item.rating.rate);
      womenSection.innerHTML += ladyElement;
    }
    else if(item.category == "jewelery"){
      let jeweleryElement = renderUI(item.image, item.title, item.price, item.rating.rate);
      jewelerySection.innerHTML += jeweleryElement;
    }
    else if(item.category == "electronics"){
      let electronicElement = renderUI(item.image, item.title, item.price, item.rating.rate);
      electronicsSection.innerHTML += electronicElement;
    }
    })









  }).catch((error) => {
    console.log('error message', error);
  })

console.log('shop page');
const searchBarElement = document.getElementById('search-field');


function search(event){
  let allProducts = document.querySelectorAll('.item');
  const searchTerm = event.target.value.toLowerCase();
  console.log("search Term -> " , searchTerm);

  console.log(allProducts);
  allProducts.forEach((product) => {
    const productName = product.querySelector('.name').textContent.toLowerCase();
    console.log(productName);
    if(!productName.includes(searchTerm)){
      product.style.display = 'none';
    }
    else{
      product.style.display = 'block';
    }
  })

}


searchBarElement.addEventListener("change", search);

