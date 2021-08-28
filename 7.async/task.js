class AlarmClock {
  constructor () {
    this.alarmCollection = [];
    this.timerId = null;
  }
  addClock (time, callback, id = null) {
    if (id === null) throw new Error("Идентификатор не был передан");
    if (this.alarmCollection.some((alarm) => alarm.id === id)) {
      console.error("Идентификатор уже сущесвтует");
    }
    else {
      this.alarmCollection.push({time, callback, id});
    }
  }
  removeClock (id) {
    this.alarmCollection = this.alarmCollection.filter(arr => arr.id !== id);
  }
  getCurrentFormattedTime () {
    let date = new Date();
    let hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    return `${hours}:${minutes}`;
  }
  start () {
    this.alarmCollection.forEach((alarm) => {
      if (this.timerId === null) this.timerId = setInterval(() => this.checkClock(), 1000);
    });
  }
  stop () {
    this.alarmCollection.forEach((alarm) => {
      if (this.timerId !== null) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    });
  }
  printAlarms () {
    this.alarmCollection.forEach((alarm) => console.log(`Звонок ID ${alarm.id} запланирован на время ${alarm.time}`));
  }
  clearAlarms () {
    this.alarmCollection.forEach((alarm) => clearInterval(alarm.id));
    this.alarmCollection = [];
  }
  checkClock () {
    this.alarmCollection.forEach((alarm) => {
      if (alarm.time === this.getCurrentFormattedTime()) {
        alarm.callback.call(alarm);
      }
    });
  }
}
