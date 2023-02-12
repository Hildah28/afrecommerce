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
