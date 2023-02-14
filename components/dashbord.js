function showProductsSection() {
  let productsTableSection = document.getElementById("productsTableSection");
  productsTableSection.style.display = "block";

  let summarySection = document.getElementById("summarySection");
  summarySection.style.display = "none";

  let ordersSection = document.getElementById("ordersSection");
  ordersSection.style.display = "none";

  let addUserSection = document.getElementById("addUserSection");
  addUserSection.style.display = "none";

  let addProductSection = document.getElementById("addProductSection");
  addProductSection.style.display = "none";
}

function showAddProductSection() {
  let productsTableSection = document.getElementById("productsTableSection");
  productsTableSection.style.display = "none";

  let summarySection = document.getElementById("summarySection");
  summarySection.style.display = "none";

  let ordersSection = document.getElementById("ordersSection");
  ordersSection.style.display = "none";

  let addUserSection = document.getElementById("addUserSection");
  addUserSection.style.display = "none";

  let addProductSection = document.getElementById("addProductSection");
  addProductSection.style.display = "block";
}

function showAddUserSection() {
  let productsTableSection = document.getElementById("productsTableSection");
  productsTableSection.style.display = "none";

  let summarySection = document.getElementById("summarySection");
  summarySection.style.display = "none";

  let ordersSection = document.getElementById("ordersSection");
  ordersSection.style.display = "none";

  let addUserSection = document.getElementById("addUserSection");
  addUserSection.style.display = "block";

  let addProductSection = document.getElementById("addProductSection");
  addProductSection.style.display = "none";
}

function showSummarySection() {
  let productsTableSection = document.getElementById("productsTableSection");
  productsTableSection.style.display = "none";

  let summarySection = document.getElementById("summarySection");
  summarySection.style.display = "block";

  let ordersSection = document.getElementById("ordersSection");
  ordersSection.style.display = "none";

  let addUserSection = document.getElementById("addUserSection");
  addUserSection.style.display = "none";

  let addProductSection = document.getElementById("addProductSection");
  addProductSection.style.display = "none";
}

function showOrdersSection() {
  let productsTableSection = document.getElementById("productsTableSection");
  productsTableSection.style.display = "none";

  let summarySection = document.getElementById("summarySection");
  summarySection.style.display = "none";

  let ordersSection = document.getElementById("ordersSection");
  ordersSection.style.display = "block";

  let addUserSection = document.getElementById("addUserSection");
  addUserSection.style.display = "none";

  let addProductSection = document.getElementById("addProductSection");
  addProductSection.style.display = "none";
}

document.getElementById("saveProduct").addEventListener("click", () => {
  saveProductData();
});
function previewImage(event) {
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.onload = function () {
    let previewImage = document.getElementById("previewProductImage");
    previewImage.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
  return reader.result;
}

function saveProductData() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let description = document.getElementById("description").value;
  let category = document.getElementById("productType").value;
  let quantity = document.getElementById("noItems").value;
  let image = document.getElementById("productImageInput").files[0].name;
  console.log(image);
  let text = "";

  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      description: description,
      image: image,
      category: category,
      quantity: quantity,
      price: price,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to save product");
      }
      return response.text();
    })
    .then((text) => {
      console.log("Response text:", text);
      let html = text;
      document.getElementById("saveProductMesseage").innerHTML = html;
    })
    .catch((error) => {
      console.error("Error saving product", error);
    });
}
