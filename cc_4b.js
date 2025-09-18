// Define a Array of Products
 
let  products = [
    {sku: "A-001" , name: "Milk" , category: "groceries" , price: 5 , inventory: 267},
    {sku: "B-002" , name: "Jacket" , category: "apparel" , price: 22 , inventory: 178},
    {sku: "C-003" , name:"Toilet Paper" , category:"household" , price: 10, inventory: 301},
    {sku:"D-004" , name:"Laptop" , category:"electronics" , price: 300 , inventory:116},
    {sku:"E-005" , name:"Chair" , category:"furniture" , price: 500 , inventory:97},
];
console.log("AHHHH")
for (let product of products) {
    let discount;
    switch (product.category) {
        case "electronics":
            discount = .2
            break;

             case "groceries" :
             case "household" :
             discount = .1
             break;
             case "apparel" :
            discount = .15
             default:
        discount = 0
            break;
    }
    let promoPrice = product.price * (1-discount)
    product.promoPrice = promoPrice;
}
console.log(products)

let customerType = "Senior" 
if (customerType = "Senior") {
    console.log(": +7% off order total")
} else if (customerType = "Student") {
    console.log(": +5% off order total")
} else {
    console.log(": 0% off total order")
}



  
