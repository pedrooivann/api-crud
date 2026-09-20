import Product from "../models/product.js";

const products = [];
let idCounter = 0;

export function createProduct(name, price) {
    idCounter++; //Counter sempre +1
    const product = new Product(idCounter, name, price); //Cria o objeto com Id a partir do counter
    products.push(product); // Insere ele no Array
    return product; // Retorna o objeto criado
};

export function deleteProduct(id){
    const index = products.findIndex(item =>item.id === id); //enconto o index do produto pelo ID

    if (index === -1){ // Verifica se ele existe
        return console.log("Index to DELETE not found");
    };

    const product = products[index]; //Pego o produto encontrado para usar no get
    products.splice(index, 1); //(index,1) => (index apagado, quantos a partir dele)

    array.forEach(element => products () = {
        
    });

    console.log(`The item ${product.id}: ${product.name} successfully removed`);
    return product;
};

export function getProduct (){
    return products;
}

export function updateProduct (id){
    const index = products.findIndex(item =>item.id === id);

    if (index === -1){ // Verifica se ele existe
        return console.log("Index to UPDATE not found");
    };

    const product = products[index];

    const newName = prompt("New name: ");
    const newPrice = Number(prompt("New price: "));

    product.name = newName;
    product.price = newPrice;
};