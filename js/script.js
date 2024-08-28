let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
//Creat the function
function updateTime() {
  let currentYear = new Date().getFullYear();
  let newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
  console.log(newYear);
  let currentDate = new Date();
  let diff = newYear - currentDate;
  let d = Math.floor(diff / 1000 / 60 / 60 / 24);
  let h = Math.floor((diff / 1000 / 60 / 60) % 24);
  let m = Math.floor((diff / 1000 / 60) % 60);
  let s = Math.floor((diff / 1000) % 60);
  console.log(d, h, m, s);
  days.innerHTML = d < 10 ? "0" + d : d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updateTime, 1000);
