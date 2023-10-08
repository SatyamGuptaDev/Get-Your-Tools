// Making a clock using javascript and css
var x = -1;
const h = document.getElementsByClassName('hour-hand')[0];
const m = document.getElementsByClassName('min-hand')[0];
const s = document.getElementsByClassName('second-hand')[0];
var dat = document.querySelector('#date');


const dh = document.querySelector('#hour');
const dm = document.querySelector('#min');
const ds = document.querySelector('#second');
const dampm = document.querySelector('#am-pm');

function clock() {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();

    const secDeg = ((sec / 60) * 360);
    const minDeg = ((min / 60) * 360) + ((sec / 60) * 6);
    const hourDeg = ((hour / 12) * 360) + ((min / 60) * 30);

    dat.innerHTML = day + '/' + month + '/' + year;
    s.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
    m.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    h.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    console.log(date.toLocaleTimeString());    

}

clock();

setInterval(clock, 1000);



var x = 1;
var nh = '00';
var nm = '00';
var ns = '00';
var nam = 'AM';

setInterval(dclock, 1000);
dclock();
function dclock() {
    const date = new Date();
    const hour = (date.getHours()) % 12;
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    const dh = document.querySelector('#hour');
    const mh = document.querySelector('#min');
    const sh = document.querySelector('#second');
    const dampm = document.querySelector('#am-pm');
    

    if (nh != hour) {
        dh.style.animation = 'hide 0.2s ease-in-out';
        x = 0;
        nh = hour;
    }
    if (nm != min) {
        mh.style.animation = 'hide 0.2s ease-in-out';
        x = 0;
        nm = min;
    }
    if (ns != sec) {
        sh.style.animation = 'hide 0.2s ease-in-out';
        x = 0;
        ns = sec;
    }
    if (nam != ampm) {
        dampm.style.animation = 'hide 0.2s ease-in-out';
        x = 0;
        nam = ampm;
    }

    dh.innerHTML = `<h3>${hour}</h3>`;
    mh.innerHTML = `<h3>${min}</h3>`;
    sh.innerHTML = `<h3>${sec}</h3>`;
    dampm.innerHTML = `<h3>${ampm}</h3>`;
}



dh.addEventListener('animationend', () => {
    dh.style.animation = 'show 0.2s ease-in-out';

});
dm.addEventListener('animationend', () => {
    dm.style.animation = 'show 0.2s ease-in-out';

});
ds.addEventListener('animationend', () => {
    ds.style.animation = 'show 0.2s ease-in-out';

});
dampm.addEventListener('animationend', () => {
    dampm.style.animation = 'show 0.2s ease-in-out';
});



// const div = document.querySelectorAll('.digital div');
// div.forEach(d => d.addEventListener('animationend', () => {
//     if (x == 0) {
//         d.style.animation = 'show 0.4s ease-in-out';
//         x = 1;
//     }
// }));




