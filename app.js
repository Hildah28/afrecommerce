function displayProducts() {
  fetch("http://localhost:3000/getProducts", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to get product");
      } else {
        console.log({ success: "successful getting products" });
        return response.json();
      }
    })
    .then((data) => {
      let products = data.products;

      console.log(products);
      let productHtml = "";
      products.reverse();
      products.forEach((product) => {
        productHtml += `
        <div class="col-lg-3">
            <div class="card m-1">
                <img class="img-responsive" src="images/${product.image}" style="width:auto ;height:auto;">
                <div class="card-body">               
                    <h5 class="card-title text-sm text-dark">${product.name}</h5>
                    <h5 class="card-text text-sm text-danger">Ksh${product.price}</h5>
                    <p class="card-text text-sm">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                    </p>
                    <button class="btn btn-dark" type="button" id="addCartBtn" onclick="addCart(this)">Add cart <i class="fas fa-shopping-cart"></i> </button>

                    </div>
            </div>        
        </div>`;
      });
      document.getElementById("productsRow").innerHTML = productHtml;
    })
    .catch((error) => {
      console.error("Error getting products", error);
    });
}
displayProducts();

function addCart(button) {
  let card = button.closest(".card");
  const name = card.querySelector(".card-title").textContent;
  const price = card.querySelector(".text-danger").textContent;
  const category = card.querySelector(".text-primary").textContent;
  console.log(`Name: ${name}, Price: ${price}, Category: ${category}`);
  document.getElementById("cartNoItems").innerHTML = oldNoItems + 1;
}
