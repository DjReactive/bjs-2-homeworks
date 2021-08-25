class AlarmClock {
  constructor () {
    this.alarmCollection = [];
    this.timerId = null;
  }
  addClock (time, callback, id = null) {
    if (id === null) throw new Error("Идентификатор не был передан");
    if (this.alarmCollection.some((alarm) => alarm.id === id)) {
      console.error("Идентификатор уже сущесвтует");
      return false;
    }
    this.alarmCollection.push({time: time, callback: callback, id: id});
    return true;
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
    this.alarmCollection.every((alarm) => {
      if (alarm.id === null) alarm.id = setInterval(() => checkClock(alarm), 1000);
    });
  }
  stop () {
    this.alarmCollection.every((alarm) => {
      if (alarm.id !== null) {
        clearInterval(alarm.id);
        alarm.id = null;
      }
    });
  }
  printAlarms () {
    this.alarmCollection.forEach((alarm) => `Звонок ID ${alarm.id} запланирован на время ${alarm.time}`)
  }
  clearAlarms () {
    this.alarmCollection.forEach((alarm) => clearInterval(alarm.id));
    this.alarmCollection = [];
  }
  checkClock (alarm) {
    if (alarm.time === getCurrentFormattedTime()) return alarm.callback;
  }
}
