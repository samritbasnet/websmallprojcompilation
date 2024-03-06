const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    html.classList.toggle('dark');
    e.target.textContent = html.classList.contains('dark') ? 'Light mode' : 'Dark mode';
});

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const month = months[now.getMonth()];
    const day = days[now.getDay()];
    const date = now.getDate();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hoursForClock = hours % 12 || 12;

    hourEl.style.transform = `translate(-50%, -100%) rotate(${(hoursForClock * 30) + (minutes / 2)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`;

    timeEl.textContent = `${hoursForClock}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
    dateEl.innerHTML = `${day}, ${month} <span class="circle">${date}</span>`;
}

updateTime();
setInterval(updateTime, 1000);
