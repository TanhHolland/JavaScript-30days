let desc = document.querySelector('.desc');
let input = document.querySelector('.input');
let cal = document.querySelector('.cal');
function getDaysInMonth(y,m) {
    return new Date(y,m,0).getDate();
}
cal.addEventListener('click', (e) => {
    let user = new Date(input.value);
    let current = new Date();

    let y1 = user.getFullYear();
    let m1 = user.getMonth()+1;
    let d1 = user.getDate();

    let y2 = current.getFullYear();
    let m2 = current.getMonth()+1;
    let d2 = current.getDate();
    let y3,m3,d3;
    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 - m1 + m2;
    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    }
    else {
        m3--;
        d3 = getDaysInMonth(y3,m3) - m1 + m2;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    desc.innerHTML = `You are ${y3} years,${m3} months and ${d3} days old`;
})