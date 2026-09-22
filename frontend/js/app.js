const productsContainer = document.querySelector("#products-container");
const createProductForm = document.querySelector("#createProductForm");

const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");

let products = [];
let nextId = 1;


// ==========================
// CRIAR PRODUTO
// ==========================

createProductForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const product = {
        id: nextId,
        name: productName.value,
        price: Number(productPrice.value)
    };

    products.push(product);
    nextId++;

    renderProducts();

    createProductForm.reset();

    const modalElement = document.querySelector("#createProductModal");
    const modal = bootstrap.Modal.getInstance(modalElement);

    modal.hide();
});


function renderProducts() {
    productsContainer.innerHTML = "";
    products.forEach((product) => {

        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>

            <p>
                R$ ${product.price.toFixed(2)}
            </p>

            <button
                class="btn btn-primary open-btn"
                data-id="${product.id}">
                Abrir
            </button>

            <button
                class="btn btn-warning update-btn"
                data-id="${product.id}">
                Atualizar
            </button>

            <button
                class="btn btn-danger delete-btn"
                data-id="${product.id}">
                Apagar
            </button>
        `;

        productsContainer.appendChild(productElement);
    });
}


productsContainer.addEventListener("click", (event) => {

    if (!event.target.matches("button")) {
        return;
    }

    const id = Number(event.target.dataset.id);
    const product = products.find((product) => {
        return product.id === id;
    });

    if (!product) {
        return;
    }

    if (event.target.classList.contains("open-btn")) {

        alert(
            `Nome: ${product.name}\n` +
            `Preço: R$ ${product.price.toFixed(2)}`
        );

        return;
    }

    if (event.target.classList.contains("update-btn")) {

        const newName = prompt(
            "Digite o novo nome:",
            product.name
        );

        if (newName === null) {
            return;
        }

        const newPrice = prompt(
            "Digite o novo preço:",
            product.price
        );

        if (newPrice === null) {
            return;
        }

        product.name = newName;
        product.price = Number(newPrice);

        renderProducts();
        return;
    }

    if (event.target.classList.contains("delete-btn")) {

        const confirmed = confirm(
            `Deseja apagar "${product.name}"?`
        );

        if (!confirmed) {
            return;
        }

        products = products.filter((product) => {
            return product.id !== id;
        });

        renderProducts();
    }
});