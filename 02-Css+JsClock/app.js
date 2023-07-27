function showTime(){

     let secondHand = document.querySelector(".secondHand");
     let now = new Date();
     let secondDeg = now.getSeconds() * 6;
     secondHand.style.transform = `rotate(${secondDeg}deg)`;

     let minHand = document.querySelector('.minHand');
     let minDeg = now.getMinutes() * 6;
     minHand.style.transform = `rotate(${minDeg}deg)`;

     let hourHand = document.querySelector(".hourHand");
     let hour = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
     let hourWithMin = hour + (now.getMinutes() * (1/ 60));

     let hourDeg = hourWithMin * 30;
     hourHand.style.transform = `rotate(${hourDeg}deg)`;

}
showTime();
setInterval(showTime, 1000);