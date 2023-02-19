function showAbout() {
  console.log("working");
  var homeSection = document.getElementById("homeSection");
  homeSection.style.display = "none";

  var aboutSection = document.getElementById("aboutSection");
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

  var aboutSection = document.getElementById("aboutSection");
  aboutSection.style.display = "none";

  var contactSection = document.getElementById("contactSection");
  contactSection.style.display = "none";
}

function showContact() {
  var contactSection = document.getElementById("contactSection");
  contactSection.style.display = "block";

  var homeSection = document.getElementById("homeSection");
  homeSection.style.display = "none";

  var aboutSection = document.getElementById("aboutSection");
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
        document.getElementById("totalProducts").innerHTML = products.length;
        document.getElementById("topProducts").innerHTML = products.length;
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
            <h5 class="card-text text-sm text-dark text-center">${product.name}</h5>
            </div>                
                <div class="card-body">               
                    <h5 class="card-text text-sm text-danger text-center">Ksh${product.price}</h5>
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
//displayProducts();

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
                          <div class="text-center">
                            <h4 class="col-12">No of items </h4>
                            <div class="btn-group text-center m-1" role="group">
                              <button type="button" class="btn btn-primary" onclick="increaseValue()"><i class="fas fa-plus fa-3x"></i></button>      
                                <span id="orderNoItems" class="m-4" style="font-size:40px;style:bold;">1</span>
                              <button type="button" class="btn btn-dark" onclick="decreaseValue()"><i class="fas fa-minus fa-3x"></i></button>
                            </div>
                          </div>                         
                    </div>        
                  </div>
                  </div>`;
}

var value = 0; // initialize value to 0

function increaseValue() {
  value++; // increment value by 1
  document.getElementById("orderNoItems").innerHTML = value; // update value displayed on webpage
}

function decreaseValue() {
  value--; // decrement value by 1
  document.getElementById("orderNoItems").innerHTML = value; // update value displayed on webpage
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
      const toast = document.createElement("div");
      toast.classList.add("toast");
      toast.innerHTML = "User added successfully";

      // Add the toast to the page
      document.getElementById("addUserMessage").appendChild(toast);

      // Show the toast for a short amount of time
      setTimeout(() => {
        toast.remove();
      }, 3000);
    })
    .catch((error) => {
      console.log(error + "Error adding user");
      showToast("Error adding user");
    });
}

function addOrder(button) {
  const modalBody = document.getElementById("productModalBody");
  const productName = modalBody.querySelector("h5").textContent.trim();
  const totalPrice = modalBody.querySelector(".card-text").textContent.trim();
  const noOfItems = modalBody.querySelector("#orderNoItems").textContent.trim();
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
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log(response);
      return response.json();
    })
    .then((data) => {
      alert("Order added successfully");
      console.error("Order added successfully:", data);
      addOrderMessage.innerHTML = "Order added successfully";
      showToast("Order added successfully"); // Call the showToast() function to display a toast message
    })
    .catch((error) => {
      console.error("Error adding order:", error);
      addOrderMessage.innerHTML =
        "Failed to add order. Please try again later.";
      alert("Failed to place order. Please try again later.");
    });
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = message;

  // Add the toast to the page
  document.body.appendChild(toast);

  // Show the toast for a short amount of time
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function makePayment() {
  const phoneNumber = 254726837210;
  const amount = 100;
  const paymentData = { phoneNumber, amount };
  fetch("http://localhost:3000/submit-phone-number", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(paymentData),
  })
    .then((response) => response.json)
    .then((data) => {
      addOrderMessage.innerHTML = "Payment successfully";
    })
    .catch((error) => {
      console.log(error + "Error making payment");
    });
}
function selectProducts() {
  document.getElementById("productsTableSection").style.display = "block";
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
      window.showProductPage = showProductPage;
      let products = data.products;
      let currentPage = 1;
      const productsPerPage = 6;

      function showProductPage(page) {
        document.getElementById("totalProducts").innerHTML = products.length;
        document.getElementById("topProducts").innerHTML = products.length;
        currentPage = page;
        let productHtml = "";
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = products.slice(startIndex, endIndex);

        productsToShow.forEach((product) => {
          productHtml += `<tr><td>${product.name}</td><td>${product.category}</td><td>${product.quantity}</td><td>${product.price}</td></tr>`;
        });
        document.getElementById("dashboardProductsRow").innerHTML = productHtml;
        updatePaginationControls();
      }

      function updatePaginationControls() {
        const totalPages = Math.ceil(products.length / productsPerPage);
        let paginationControls = "";
        if (currentPage > 1) {
          paginationControls += `<i class="fas fa-chevron-left" role="button" onclick="showProductPage(
            ${currentPage - 1}
          )"></i>`;
        }
        for (let i = 1; i <= totalPages; i++) {
          paginationControls += `<i class="bg-dark m-1 text-white" role="button" onclick="showProductPage(
            ${i}
          )">${i}</i>`;
        }
        if (currentPage < totalPages) {
          paginationControls += `<i class="fas fa-chevron-right m-1" onclick="showProductPage(${
            currentPage + 1
          })"></i>`;
        }
        document.getElementById("productsPaginationControls").innerHTML =
          paginationControls;
      }

      showProductPage(3);
    })
    .catch((error) => {
      console.log("Error getting products" + error);
    });
}

function getOrdersData() {
  document.getElementById("ordersSection").style.display = "block";
  fetch("http://localhost:3000/getOrders", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
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
      window.showOrderPage = showOrderPage;
      let products = data.products;
      let currentPage = 1;
      const productsPerPage = 6;

      function showOrderPage(page) {
        document.getElementById("totalProducts").innerHTML = products.length;
        document.getElementById("topProducts").innerHTML = products.length;
        currentPage = page;
        let productHtml = "";
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = products.slice(startIndex, endIndex);

        productsToShow.forEach((product) => {
          productHtml += `<tr><td>${product.orderId}</td><td>${product.clientId}</td><td>${product.productId}</td><td>${product.noItems}</td><td>${product.orderDate}</td><td>${product.orderStatus}</td></tr>`;
        });
        document.getElementById("ordersSectionTable").innerHTML = productHtml;
        updatePaginationControls();
      }

      function updatePaginationControls() {
        const totalPages = Math.ceil(products.length / productsPerPage);
        let paginationControls = "";
        if (currentPage > 1) {
          paginationControls += `<i class="fas fa-chevron-left" role="button" onclick="showOrderPage(
            ${currentPage - 1}
          )"></i>`;
        }
        for (let i = 1; i <= totalPages; i++) {
          paginationControls += `<i class="bg-dark m-1 text-white" role="button" onclick="showOrderPage(
            ${i}
          )">${i}</i>`;
        }
        if (currentPage < totalPages) {
          paginationControls += `<i class="fas fa-chevron-right m-1" onclick="showOrderPage(${
            currentPage + 1
          })"></i>`;
        }
        document.getElementById("ordersSectionPagination").innerHTML =
          paginationControls;
      }

      showOrderPage(3);
    })
    .catch((error) => {
      console.log(error);
    });
}
