import listProduct from "./template.hbs"
import dataProduct from "./data.json"

const products = dataProduct.products
// console.log(dataProduct.products)
const loyaut = listProduct({products})

document.querySelector(".menu").innerHTML = loyaut
console.log(loyaut)