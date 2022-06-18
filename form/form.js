

var btn = document.querySelector("#btn");

btn.addEventListener("click" , hesapla);

function hesapla(e){
    e.preventDefault();
    var sayi1 = document.querySelector("#sayi1").value;
    var sayi2 = document.querySelector("#sayi2").value;
    var sonuc = document.querySelector("#sonuc");
    var sonuc =parseInt(sayi1) + parseInt(sayi2);
    document.querySelector("#sonuc").value = sonuc;
}