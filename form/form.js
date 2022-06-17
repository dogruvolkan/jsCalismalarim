let anaForm = document.querySelector("#userForm");
anaForm.addEventListener("submit", formSubmit);


function formSubmit(e) {
    e.preventDefault();
    console.log("işlem gerçekleşti");
    let score = document.querySelector("#score");
    console.log(score.value);
}