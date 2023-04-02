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

const searchBarElement = document.getElementById('search-field');
const menSection = document.querySelector('.men');
const womenSection = document.querySelector('.women');
const jewelerySection = document.querySelector(".jewelery");
const electronicsSection = document.querySelector(".electronics");
const logoutButton = document.querySelector("#logoutButton");

// Filters
const allFilter = document.querySelector('.active');
const mensFilter = document.querySelector('.men-filter');
const womensFilter = document.querySelector(".women-filter");
const jewFilter = document.querySelector(".jew-filter");
const electronicsFilter = document.querySelector(".electronics-filter");


function clearColors(){
    allFilter.style.backgroundColor = 'white';
    mensFilter.style.backgroundColor = 'white';
    womensFilter.style.backgroundColor = 'white';
    jewFilter.style.backgroundColor = 'white';
    electronicsFilter.style.backgroundColor = 'white';
    allFilter.style.color = 'black';
    mensFilter.style.color = 'black';
    womensFilter.style.color = 'black';
    jewFilter.style.color = 'black';
    electronicsFilter.style.color = 'black';
}

function clearHTML(){
    menSection.innerHTML = "";
    womenSection.innerHTML = "";
    jewelerySection.innerHTML = "";
    electronicsSection.innerHTML = "";
    
}

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

function fetchData(filter){
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let stringifiedData = JSON.stringify(data);
    localStorage.setItem('products', stringifiedData);
    data.forEach((item) => {
    if(item.category == "men's clothing" && (filter == "all" || filter == "men")){
      let mensElement = renderUI(item.image, item.title, item.price, item.rating.rate);
      menSection.innerHTML += mensElement;
    }
    else if(item.category == "women's clothing" && (filter == "all" || filter == "women")){
      let ladyElement = renderUI(item.image, item.title, item.price, item.rating.rate);
      womenSection.innerHTML += ladyElement;
    }
    else if(item.category == "jewelery" && (filter == "all" || filter == "jewel")){
      let jeweleryElement = renderUI(item.image, item.title, item.price, item.rating.rate);
      jewelerySection.innerHTML += jeweleryElement;
    }
    else if(item.category == "electronics" && (filter == "all" || filter == "electronic")){
      let electronicElement = renderUI(item.image, item.title, item.price, item.rating.rate);
      electronicsSection.innerHTML += electronicElement;
    }
    })}).catch((error) => {
    console.log('error message', error);
  })
}

function filterData(filter){
  clearHTML();
  fetchData(filter);
}

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

console.log('shop page');
fetchData("all");



// Event Listeners

searchBarElement.addEventListener("change", search);
allFilter.addEventListener('click', () => {
  filterData("all");
  clearColors();
  allFilter.style.backgroundColor = 'black';
  allFilter.style.color = 'white';
});
mensFilter.addEventListener('click', () => {
  filterData("men");
  clearColors();
  mensFilter.style.backgroundColor = 'black';
  mensFilter.style.color = 'white';
});
womensFilter.addEventListener('click', () => {
  filterData("women");
  clearColors();
  womensFilter.style.backgroundColor = 'black';
  womensFilter.style.color = 'white';
});
jewFilter.addEventListener('click', () => {
  filterData("jewel");
  clearColors();
  jewFilter.style.backgroundColor = 'black';
  jewFilter.style.color = 'white';
});
electronicsFilter.addEventListener('click', () => {
  filterData("electronic");
  clearColors();
  electronicsFilter.style.backgroundColor = 'black';
  electronicsFilter.style.color = 'white';
});


logoutButton.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem('currentUser');
  window.location.href = '../';
})

