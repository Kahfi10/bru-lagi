let products = null;
fetch('products.json')
.then(response => response.json())
.then(data => {
    products = data;
    console.log(products);
    addDatatoHTML();
})

let ListProduct = document.querySelector('.ListProduct');
function addDatatoHTML() {
    products.forEach(product => {
        let newProducts = document.createElement('a');
        newProducts.href = '/detail.html?id=' + products.id;
        newProducts.classList.add('item');
        newProducts.innerHTML = `
            <img src="${product.image}">
            <h2>${product.name}</h2>
            <div class="price">${product.price}</div>   
        `;

        ListProduct.appendChild(newProducts);
    });
}