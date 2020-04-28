const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  minutes: document.querySelector('span[data-value="mins"]'),
  seconds: document.querySelector('span[data-value="secs"]'),
};
const CountdownTimer = {
  intervalId: null,
  targetDate: null,
  getTargetDate() {
    if (this.targetDate > Date.now())
      this.updateClockface(this.targetDate - Date.now());
  },

  countDown(date) {
    this.targetDate = new Date(date);
    if (this.intervalId) return;
    this.getTargetDate();
    this.intervalId = setInterval(() => {
      this.getTargetDate();
      if (this.targetDate < Date.now()) {
        clearInterval(this.intervalId), (this.intervalId = null);
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

CountdownTimer.countDown('Apr 28, 2021, 19:22:00');
