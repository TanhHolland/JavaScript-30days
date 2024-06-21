let task = document.querySelector(".input");
let listToDo = document.querySelector(".list__todo");
let icon1 = `<svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="check"
                        >
                            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path
                                fill="currentColor"
                                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                            />
                        </svg>`;
let icon2 = `<svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            class="xmark"
                        >
                            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path
                                fill="currentColor"
                                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                            />
                        </svg>`;
let isCheckDone = false;
function addItem() {
    document.querySelector(".submit").addEventListener("click", (event) => {
        if (task !== "") {
            let item = document.createElement("div");
            item.className = "item";
            item.innerHTML =
                icon1 + `<span class="title-todo">${task.value}</span>` + icon2;
            listToDo.appendChild(item);
            task.value = "";
        }
    });
}
function checkDone() {
    listToDo.addEventListener("click", (event) => {
        console.log(event);
        // if (event.target === 'svg.check') {
        //     check.style.color = "#9B9C9E";
        //     title_todo.style.textDecoration = 'line-through';
        // }
        // else {
        //     check.style.color = "#fff";
        //     title_todo.style.textDecoration = 'none';
        // }
        // isCheckDone = !isCheckDone;
    });
}
function main() {
    addItem();
    checkDone();
}
main();
