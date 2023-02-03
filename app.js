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
}
