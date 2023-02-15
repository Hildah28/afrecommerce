function showAbout() {
  var homeSection = document.getElementById("homeSection");
  homeSection.style.display = "none";

  var aboutSection = document.getElementById("about");
  aboutSection.style.display = "block";

  var productSection = document.getElementById("productSection");
  productSection.style.display = "none";

  var contactSection = document.getElementById("contactSection");
  contactSection.style.display = "none";
}

function showHome() {
  var homeSection = document.getElementById("homeSection");
  homeSection.style.display = "block";

  var contactSection = document.getElementById("contactSection");
  contactSection.style.display = "none";

  var productSection = document.getElementById("productSection");
  productSection.style.display = "none";
}

function showProducts() {
  var productSection = document.getElementById("productSection");
  productSection.style.display = "block";

  var homeSection = document.getElementById("homeSection");
  homeSection.style.display = "none";

  var aboutSection = document.getElementById("about");
  aboutSection.style.display = "none";

  var contactSection = document.getElementById("contactSection");
  contactSection.style.display = "none";
}

function showContact() {
  var contactSection = document.getElementById("contactSection");
  contactSection.style.display = "block";

  var homeSection = document.getElementById("homeSection");
  homeSection.style.display = "none";

  var aboutSection = document.getElementById("about");
  aboutSection.style.display = "none";

  var productSection = document.getElementById("productSection");
  productSection.style.display = "none";
}

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
      const productsPerPage = 6;

      function showPage(page) {
        document.getElementById("totalProducts").innerHTML=products.length;        
        document.getElementById("topProducts").innerHTML=products.length;
        currentPage = page;
        let productHtml = "";
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = products.slice(startIndex, endIndex);

        productsToShow.forEach((product) => {
          productHtml += `
        <div class="col-lg-2">
            <div class="card m-1">
            <div class="card-header">
            <img class="img-responsive" src="images/${product.image}" style="width:100%;height:80%">
            <h5 class="card-text text-sm text-dark">${product.name}</h5>
            </div>                
                <div class="card-body">               
                    <h5 class="card-text text-sm text-danger">Ksh${product.price}</h5>
                    <p class="d-flex justfy-content-centre">
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
          paginationControls += `<i class="fas fa-chevron-left" role="button" onclick="showPage(
            ${currentPage - 1}
          )"></i>`;
        }
        for (let i = 1; i <= totalPages; i++) {
          paginationControls += `<i class="bg-dark m-1 text-white" role="button" onclick="showPage(
            ${i}
          )">${i}</i>`;
        }
        if (currentPage < totalPages) {
          paginationControls += `<i class="fas fa-chevron-right m-1" onclick="showPage(${
            currentPage + 1
          })"></i>`;
        }
        document.getElementById("paginationControls").innerHTML =
          paginationControls;
      }

      showPage(3);
    })
    .catch((error) => {
      console.error("Error getting products", error);
    });
}
displayProducts();

function addCart(button) {
  let card = button.closest(".card");
  const name = card.querySelector(".card-text").textContent;
  const price = card.querySelector(".text-danger").textContent;
  document.getElementById("productModalBody").innerHTML = `<div class="row">
                  <div class="col-12">
                    <div class="card m-1">  
                          <img class="img-responsive m-auto border-0 form-control" src="images/${name}.jpg" alt="product image" style="height:100%;width:100%" />
                          <h5 class="card-header text-sm text-dark">${name}</h5>   
                          
                          <div class="text-success text-center bg-dark" id="addOrderMessage"></div>               
                          <div class="card-body"> 
                            <h5 class="card-text text-sm text-danger">Ksh${price}</h5>
                            <div class="d-flex justify-content-center" style="width: 100%;">
                                  <i class="fas fa-star text-warning"></i>
                                  <i class="fas fa-star text-warning"></i>
                                  <i class="fas fa-star text-warning"></i>
                                  <i class="fas fa-star text-warning"></i>
                                  <i class="fas fa-star text-warning"></i>                               
                            </div>


                          </div>
                          <input type="number"  class="card-footer bg-dark form-control text-white" placeholder="Enter No of items" id="orderNoItems" >                          
                    </div>        
                  </div>
                  </div>`;
}

function addUser() {
  let nameInput = document.getElementById("nameInput").value;
  let usernameInput = document.getElementById("usernameInput").value;
  let passwordInput = document.getElementById("passwordInput").value;
  let emailInput = document.getElementById("emailInput").value;
  let accountTypeSelect = document.getElementById("accountTypeSelect").value;
  let userData = {
    nameInput: nameInput,
    usernameInput: usernameInput,
    passwordInput: passwordInput,
    accountTypeSelect: accountTypeSelect,
    emailInput: emailInput,
  };

  fetch("http://localhost:3000/addUser", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json)
    .then((data) => {
      console.log("User added successfully");
      document.getElementById("addUserMessage").innerHTML =
        "User added successfully";
    })
    .catch((error) => {
      console.log(error + "Error adding user");
    });
}

function addOrder(button) {
  const modalBody = document.getElementById("productModalBody");
  const productName = modalBody.querySelector("h5").textContent.trim();
  const totalPrice = modalBody.querySelector(".card-text").textContent.trim();
  const noOfItems = modalBody.querySelector("#orderNoItems").value;
  const addOrderMessage = modalBody.querySelector("#addOrderMessage");

  const clientId = "clientId";
  const productId = productName;
  const noItems = noOfItems;
  const orderDate = new Date();
  const orderStatus = "Active";
  const paymentStatus = "Pending";
  const deliveryStatus = "Pending";
  const orderTime = orderDate.getTime();
  const orderData = {
    clientId,
    productId,
    noItems,
    orderDate,
    orderStatus,
    paymentStatus,
    deliveryStatus,
    totalPrice,
    orderTime,
  };
  fetch("http://localhost:3000/addOrder", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(orderData),
  })
    .then((response) => response.json)
    .then((data) => {
      addOrderMessage.innerHTML = "Order added successfully";
      alert("Order placed successfully");
    })
    .catch((error) => {
      console.log(error + "Error adding order");
    });
}
