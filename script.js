
let hr=document.getElementById("hour");
let min=document.getElementById("minute");
let sec=document.getElementById("second");

function displayTime(){
    let date= new Date();

    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hrot=30*hh + mm/2;
    let mrot=6*mm;
    let srot=6*ss;

    hr.style.transform=`rotate(${hrot}deg)`;
    min.style.transform=`rotate(${mrot}deg)`;
    sec.style.transform=`rotate(${srot}deg)`;
    

   
}

setInterval(displayTime,1000);
function changeTheme(){
    let element =document.body;
    element.classList.toggle('dark-mode');

}
function dayTime(){
let digitalClock=new Date();
document.getElementById('digital').innerHTML=digitalClock
}
setInterval(dayTime,1000);