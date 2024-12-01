



 function updateTimer() {
  const NY = new Date(2025, 0, 1, 0, 0, 0, 0, 1);
  const now = new Date();
  const diff = NY.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  const daysEl = document.querySelector('.days .timer-num');
  const hoursEl = document.querySelector('.hours .timer-num');
  const minutesEl = document.querySelector('.minutes .timer-num');
  const secondsEl = document.querySelector('.seconds .timer-num');
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
  return setInterval(updateTimer, 1000);
}

export default{updateTimer};