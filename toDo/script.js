const inputArea = document.querySelector("#inputValue");
const btnEkle = document.querySelector("#btnEkle");
const btnSil = document.querySelector("#btnSil");
const listDom = document.querySelector("#listItems");



btnEkle.addEventListener("click", addItem);
btnSil.addEventListener("click", clearAllItem);



var option = {
    animation: true,
    delay: 2000,
};


function toast() {
    var toastDom = document.querySelector("#toasts");
    toastDom.innerHTML = `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>`;
    var toastElement = new bootstrap.Toast(toastDom, option);
    toastElement.show();
    console.log("eklendi");
}

function addItem(e) {
    e.preventDefault();
    const listItem = document.createElement("li");
    listItem.classList.add("list_item");
    listItem.innerHTML = inputArea.value;
    listDom.appendChild(listItem);
    toast();
    inputArea.value = "";
}

function clearAllItem() {
    const listItem = document.querySelector("ul");
    listItem.remove();
    
}