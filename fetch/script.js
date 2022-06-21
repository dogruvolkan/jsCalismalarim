apiyi kullanmak için istekte bulunduk


let listDom = document.querySelector("#listItem");

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(function(todos){
        todos.forEach((todo)=>{
            let li = document.createElement("li");
            li.innerHTML = todo.title;
            listDom.appendChild(li);
           
        })
    })





