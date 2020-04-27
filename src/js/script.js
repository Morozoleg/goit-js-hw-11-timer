const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  minutes: document.querySelector('span[data-value="mins"]'),
  seconds: document.querySelector('span[data-value="secs"]'),
};
const CountdownTimer = {
  intervalId: null,
  countDown(date) {
    const targetDate = new Date(date);
    this.intervalId = setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = targetDate - currentDate;
      this.updateClockface(deltaTime);
      if (this.deltaTime <= 0) {
        clearInterval(intervalId), (this.intervalId = null);
        updateClockface(0);
      }
    }, 1000);
  },
  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${mins}`;
    refs.seconds.textContent = `${secs}`;
  },
  pad(value) {
    return String(value).padStart(2, '0');
  },
};

CountdownTimer.countDown('Apr 17, 2021, 01:18:00');
