$(document).ready(function () {
    function generateProducts() {
        $.getJSON("data.json", function(response){

            let productsContainer = document.getElementById("product-container");
            for (let i = 0; i <response.products.length ; i++) {
                let input = "";
                input = '<div class="shop-item"> ' +
                    '<span class="shop-item-title">' + response.products[i].Name + '</span>' +
                    '<img class="shop-item-image" src="' + response.products[i].image + '">' +
                    '<div class="shop-item-details">' +
                    '<span class="shop-item-price">' + response.products[i].Price + '</span>' +
                    '<button class="btn btn-primary shop-item-button" type="button">Lägg till i varukorgen</button>\n' +
                    '</div>' +
                    '</div>';
                productsContainer.innerHTML += input;

            }
            // let result = "";
            // for(let i = 0; i < 10; i++){
            //     result = result + "<button id = 'produkt'>" + response.products[i].Name + "</button> <br> <br>";
            // }
            // document.getElementById("products").innerHTML = result;
            // console.log(response.products[]);
        })
    }
    generateProducts();
    // ready();
});

// <div class="shop-item">
//     <span class="shop-item-title">adidas NMD R1</span>
// <img class="shop-item-image" src="images/adidas.png">
//     <div class="shop-item-details">
//     <span class="shop-item-price">1200kr</span>
// <button class="btn btn-primary shop-item-button" type="button">Lägg till i varukorgen</button>
// </div>
// </div>
