const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
btn.addEventListener('click',(e) => {
    let item = document.createElement('div');
    item.className = 'item';
    let p = document.createElement('p');
    p.className = 'text';
    p.contentEditable = 'true';
    p.addEventListener('keyup',(e) => {
        save();
    })
    let img = document.createElement('img');
    img.src = './xmark-solid.svg';
    img.className = 'delete';
    item.appendChild(p);
    item.appendChild(img);
    content.appendChild(item);
})
function save() {
    localStorage.setItem('value',content.innerHTML);
}
function show() {
    content.innerHTML = localStorage.getItem('value');
}
function removeItem() {
    content.addEventListener('click', (e) => {
        if (e.target.tagName === "IMG") {
            e.target.parentElement.remove();
            save();
        }
    })
}
removeItem();
// localStorage.removeItem("value");
show();