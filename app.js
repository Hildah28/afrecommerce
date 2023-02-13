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
      window.showPage = showPage;

      let products = data.products;

      let currentPage = 1;
      const productsPerPage = 4;

      function showPage(page) {
        currentPage = page;
        let productHtml = "";
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = products.slice(startIndex, endIndex);

        productsToShow.forEach((product) => {
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
                    <button type="button"  class="btn btn-success" type="button" data-toggle="modal" data-target="#productModal" id="addCartBtn" onclick="addCart(this)">Add cart <i class="fas fa-shopping-cart"></i> </button>
                   </div>
            </div>        
        </div>`;
        });
        document.getElementById("productsRow").innerHTML = productHtml;
        updatePaginationControls();
      }

      function updatePaginationControls() {
        const totalPages = Math.ceil(products.length / productsPerPage);
        let paginationControls = "";
        if (currentPage > 1) {
          paginationControls += `<button class="btn btn-dark btn-sm form-control m-1" onclick="showPage(
            ${currentPage - 1}
          )">Previous</button>`;
        }
        for (let i = 1; i <= totalPages; i++) {
          paginationControls += `<button class="btn btn-dark btn-sm form-control m-1" onclick="showPage(
            ${i}
          )">${i}</button>`;
        }
        if (currentPage < totalPages) {
          paginationControls += `<button class="btn btn-dark btn-sm m-1 form-control" onclick="showPage(${
            currentPage + 1
          })">Next</button>`;
        }
        document.getElementById("paginationControls").innerHTML =
          paginationControls;
      }

      showPage(2);
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
  console.log(`Name: ${name}, Price: ${price},image: ${name}.jpg`);
  document.getElementById(
    "productModalBody"
  ).innerHTML = `<div class="row"><div class="col-12">
                    <div class="card m-1">                    
                          <div class="card-body">    
                            <img class="img-responsive m-auto border-0 form-control" src="images/${name}.jpg" alt="product image" style="height:50%;width:50%" />           
                            <h5 class="card-title text-sm text-dark">${name}</h5>
                            <h5 class="card-text text-sm text-danger">Ksh${price}</h5>
                            <p class="card-text text-sm">
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                            </p>
                            <input type="number"  class="bg-primary form-control" placeholder="Enter No of items" id="orderNoItems" >
                          </div>
                    </div>        
                  </div></div>`;
}

function placeOrder() {
  let numberOfOrders = 0;
  numberOfOrders = document.getElementById("cartNoItems").value;
  console.log(`Number of orders: ${numberOfOrders}`);
  numberOfOrders =
    parseInt(numberOfOrders) + document.getElementById("orderNoItems").value;
  document.getElementById("cartNoItems").value = numberOfOrders;
}
