const URL = "https://api.mercadolibre.com/sites/MLB/search?q=notebooks";

fetch(URL)
    .then(response =>  response.json())
    .then(data => {

        const productListDiv = document.getElementById('product-list');
        data.results.forEach(product => {
            const productTitle = document.createElement('li')
            productTitle.textContent = product.title;
            productListDiv.appendChild(productTitle);
        });
    })
    .catch(error => console.error("Erro: ", erro));

