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
      return response.json();
    })
    .then((data) => {
      console.log("Product saved successfully", data);
    })
    .catch((error) => {
      console.error("Error saving product", error);
    });
}
