const container = document.querySelector(".container");
const boxBtn = document.querySelector('.box_btn');
boxBtn.addEventListener('click',(e)=> {
    ActionEvent(e.target);
})
function DisplayAdd() {
    let arr = container.childNodes;
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            arr[i].style.top = `${
                arr[i - 1].offsetTop + arr[i - 1].offsetHeight + 20
            }px`;
        }
    }
}
function DisplayRemove() {
    let arr = container.childNodes;
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.top = `${
            arr[i].offsetTop - arr[i].offsetHeight - 20
        }px`;
        arr[i].style.animationDuration = '2s';
    }
}
function ActionEvent(e) {
    let toast = document.createElement("div");
    toast.className = "toast";
    let wrap = document.createElement("div");
    wrap.className = "wrap";
    let line = document.createElement("div");
    line.className = "line";
    line.addEventListener("animationend", (e) => {
        e.target.parentElement.remove();
        DisplayRemove();
    });
    let box = document.createElement("div");
    box.className = `box ${e.innerHTML.toLowerCase()}`;
    let img = document.createElement("img");
    img.className = "logo";
    img.src = `./${e.innerHTML.toLowerCase()}.svg`;
    box.appendChild(img);
    let p = document.createElement("p");
    p.className = "desc";
    p.innerHTML = e.innerHTML;
    wrap.appendChild(box);
    wrap.appendChild(p);
    toast.appendChild(wrap);
    toast.appendChild(line);
    container.appendChild(toast);
    DisplayAdd();
}
