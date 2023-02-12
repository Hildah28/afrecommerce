function previewImage(event) {
  let preview = document.getElementById("preview");
  preview.innerHTML = "";
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.onload = function () {
    let html = `<img id="preview" src="${reader.result}" style="width:25%;height:25%;" alt="Image preview">`;
    preview.innerHTML = html;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
  return reader.result;
}

document.getElementById("saveProduct").addEventListener("click", () => {
  saveProductData();
});
function saveProductData() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let description = document.getElementById("description").value;
  let category = document.getElementById("productType").value;
  let quantity = document.getElementById("noItems").value;
  let image = document.getElementById("productImage").value;
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

function displayProducts() {
  let productHtml = `<div class="col-lg-3">
  <div class="card  m-1">
      <img class="img-responsive" src="images/image1.jpg" style="width:auto ;height:auto;">
      <div class="card-body">               
          <h3 class="card-title text-sm">Product name</h3>
          <p class="card-text text-sm">Description</p>
          <p class="card-text text-sm">Price</p>
          <p class="card-text text-sm">Availability</p>
          <p class="card-text text-sm"><i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
          </p>
          <button class="btn btn-dark" type="button">Add cart <i class="fas fa-shopping-cart"></i> </button>
      </div>
  </div>        
</div>`;
  fetch("http://localhost:3000/getProducts", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to get product");
      }
      return response.data();
    })
    .then((data) => {
      console.log(data);
      return text;
    })
    .catch((error) => {
      console.error("Error getting products", error);
    });
}
displayProducts();
