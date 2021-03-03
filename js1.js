let shoppingList = [
    { name: "Яблоко", amount: 3, boughtCheck: true, },
    { name: "Банан", amount: 7, boughtCheck: false, },
    { name: "Хлеб", amount: 2, boughtCheck: true, },
    { name: "Апельсин", amount: 4, boughtCheck: false, },
];

shoppingList.sort(function (shoppingList) {
    if (shoppingList.boughtCheck === true) {
        return -1;
    } else {
        return 1;
    }
});

function addProduct(product, productList) {
    let existProduct = false;
    productList = productList.map((productItem) => {
        if (product.name === productItem.name) {
            productItem.amount += product.amount;
            existProduct = true;
        }
        return productItem;
    });

    if (!existProduct) {
        productList.push(product);
    }
    return productList;
}

function getProduct() {
    let newName = prompt("Введите название продукта");
    let newAmount = parseInt(prompt("Введите необходимое количество"));
    const product = { name: newName, amount: newAmount, boughtCheck: false };
    shoppingList = addProduct(product, shoppingList);
}

getProduct();

console.log(shoppingList);

