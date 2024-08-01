const time = document.querySelector('.time');
const change = document.querySelector('.change');
const rotate = document.querySelector('.rotate');
let isCheck = false;
let result = "00:00:00";
function DisplayTime(data) {
    let span = document.createElement('span');
    span.className = 'title';
    span.innerHTML = data;
    time.appendChild(span);
}
change.addEventListener('click', (e) => {
    if(!isCheck) {
        isCheck = true;
        change.setAttribute('src','')
    }
})
