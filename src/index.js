
// Cargar los productos desde el archivo JSON
fetch('data.json')
  .then(response => response.json())  // Parseamos el JSON
  .then(data => {
    // Guardar los productos en el LocalStorage (opcional)
    localStorage.setItem("productsData", JSON.stringify(data));

    // Mostrar los productos en la página
    displayProducts(data.products);
  })
  .catch(error => console.error("Error al cargar el archivo JSON:", error));

// Función para mostrar los productos en el DOM
function displayProducts(products) {
  const productList = document.getElementById("products_list");

  if (products && products.length > 0) {
    products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      const img = document.createElement("img");
      img.src = product.img;
      img.alt = product.name;

      const name = document.createElement("h3");
      name.textContent = product.name;

      const price = document.createElement("p");
      price.textContent = `$${product.price.toLocaleString()}`;

      productDiv.appendChild(img);
      productDiv.appendChild(name);
      productDiv.appendChild(price);

      productList.appendChild(productDiv);
    });
  } else {
    productList.innerHTML = "<p>No hay productos disponibles</p>";
  }
}


/*const fs = require('fs');
const path = require('path');

// Ruta del archivo JSON
const filePath = path.join(__dirname, 'data.json');

// Selección de elementos del DOM
const productList = document.querySelector('[data-list]');
const form = document.querySelector('[data-form]');
const nameField = document.querySelector('[data-name]');
const priceField = document.querySelector('[data-price]');
const imageField = document.querySelector('[data-image]');

// Función para cargar productos del archivo JSON
function loadProducts() {
    try {
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const products = JSON.parse(jsonData);
        renderProducts(products);
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

// Función para renderizar productos en el DOM
function renderProducts(products) {
    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="card-container--info">
                <p>${product.name}</p>
                <p>${product.price}</p>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Función para agregar un nuevo producto
function addProduct(event) {
    event.preventDefault();
    const name = nameField.value;
    const price = priceField.value;
    const image = imageField.value;

    if (!name || !price || !image) {
        alert('Por favor completa todos los campos.');
        return;
    }

    try {
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const products = JSON.parse(jsonData);
        const newProduct = { name, price, image };
        products.push(newProduct);
        fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
        renderProducts(products);
        form.reset();
    } catch (error) {
        console.error('Error al agregar un nuevo producto:', error);
    }
}

// Asignar evento al formulario
form.addEventListener('submit', addProduct);

// Cargar productos al iniciar
loadProducts();*/

