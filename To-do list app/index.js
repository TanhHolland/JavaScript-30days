let task = document.querySelector(".input");
let listToDo = document.querySelector(".list__todo");
let srcUncheck = "./circle-check-regular.svg";
let srcCheck = "./circle-check-solid.svg";
let srcDelete = "./xmark-solid.svg";
function addItem() {
    document.querySelector(".submit").addEventListener("click", (event) => {
        if (task.value !== "") {
            let item = document.createElement("div");
            item.className = "item";
            // add icon check
            let img1 = document.createElement("img");
            img1.setAttribute("src", srcUncheck);
            img1.setAttribute("class", "icon_list");
            img1.setAttribute("name", "uncheck");
            item.appendChild(img1);
            // add to-do
            let todo = document.createElement("span");
            todo.className = "title-todo";
            todo.textContent = task.value;
            item.appendChild(todo);
            // add icon delete
            let img2 = document.createElement("img");
            img2.setAttribute("src", srcDelete);
            img2.setAttribute("class", "icon_list xmark");
            img2.setAttribute("name", "delete");
            item.appendChild(img2);
            // done Item
            listToDo.appendChild(item);
            task.value = "";
            save();
        }
    });
}
function save() {
    localStorage.setItem("data", listToDo.innerHTML);
}
function show() {
    listToDo.innerHTML = localStorage.getItem("data");
}
function control() {
    listToDo.addEventListener("click", (e) => {
        if (e.target.name === "uncheck") {
            e.target.setAttribute("src", srcCheck);
            e.target.nextElementSibling.style.textDecoration = "line-through";
            e.target.name = "check";
            save();
        } else if (e.target.name === "check") {
            e.target.setAttribute("src", srcUncheck);
            e.target.nextElementSibling.style.textDecoration = "none";
            e.target.name = "uncheck";
            save();
        } else if (e.target.name === "delete") {
            e.target.parentElement.remove();
            save();
        }
    });
}
addItem();
control();
show();
