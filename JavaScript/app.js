// All of our data is available on the global `window` object.
const { products, categories } = window;

// global variables (arrays)
var menApparelArr = [];
var womenApparelArr = [];
var childrenApparelArr = [];

var i = 0;
let items = document.querySelector(".items");

products.filter((res) => {
  if (res.categories.includes("P1")) {
    menApparelArr.push(res);
  }
  if (res.categories.includes("P2")) {
    womenApparelArr.push(res);
  }
  if (res.categories.includes("P3")) {
    childrenApparelArr.push(res);
  }
});

// navbar is created dynamically here
var nav = document.getElementById("menu");

for (i = 0; i < categories.length; i++) {
  // creating nav item for the nav bar of type, "button"
  var navItem;

  navItem = document.createElement("button");
  navItem.textContent = categories[i].name;

  navItem.id = categories[i].name;

  // using appendChild in order to append the nav item to the nav bar
  nav.appendChild(navItem);
}

// creates each different product in the list
function createEachProduct(product) {
  return ` <div ><article class="card">
 
    <img src="${product.imageURL}" alt="Product-Image">

    <div class="card-info">

    <header>
      <h5><i>${product.title}</i></h5>
    </header>
    
    <h6 class="price">CAD :${(product.price / 100).toLocaleString("en-CA", {
      currency: "CAD",
      style: "currency"
    })}
    
    </h6>

    <p class="card-text">${product.description}</p>
   
    </div>
    </div>

  </article>`;
}

// When the user clicks on the navbar, the page will change to the clicked category table
let NavItems = document.querySelectorAll("#menu button");

for (let i = 0; i < NavItems.length; i++) {
  NavItems[i].addEventListener("click", function () {
    // switch the category table based upon the user's nav item selection
    showProductsBasedOnCategory(NavItems[i].textContent);
    console.log(NavItems[i].textContent);
  });
}

// loads individual items and stores it in a variable
function loadElements(items1) {
  let displayProducts = items1.map(function (product) {
    return createEachProduct(product);
  });
  displayProducts = displayProducts.join("");
  items.innerHTML = displayProducts;
}

// function to call the functions when nav item is changed
function callFunctions(category) {
  // calls the loadElements functions that shows products of various categories
  let filteredItems = products.filter(function (product) {
    if (product.categories.includes(category)) {
      if (category === "P1") {
        return menApparelArr;
      }
      if (category === "P2") {
        return womenApparelArr;
      }
      if (category === "P3") {
        return childrenApparelArr;
      }
    }
  });

  loadElements(filteredItems);
}

// based upon the category chosen, shows the products
function showProductsBasedOnCategory(cat) {
  var category;
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].id === cat || categories[i].name === cat) {
      document.getElementById("selected-category").textContent = categories[i].name;
      category = categories[i].id;
    }
  }

  callFunctions(category);
}

// by default, Men's category would be displayed to the user
document.getElementById("selected-category").textContent = "Men";

showProductsBasedOnCategory("P1");