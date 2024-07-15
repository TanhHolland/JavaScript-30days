let create = document.querySelector('.create');
let input = document.querySelector('.text');
let copy = document.querySelector('.copy');
let notify = document.querySelector('.notify');
let x = "123456";
let y = "abcdef";
create.addEventListener('click', (e) => {
    let password = '';
    password += x[Math.floor(Math.random()*x.length)];
    password += y[Math.floor(Math.random()*y.length)];
    input.value = password;
})
copy.addEventListener('click',(e) => {
    input.select();
    document.execCommand('copy');
})