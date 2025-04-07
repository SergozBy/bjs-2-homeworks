class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсуствуеют обязательные аргументы');
        }

        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присуствует звонок на это же время');
        }

        const newAlarm = {
            time,
            callback,
            canCall: true
        };
        this.alarmCollection.push(newAlarm);
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time != time);
    }

    getCurrentFormattedTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();

        return `${hours}:${minutes}`;
    }

    start() {
        if (this.intervalId) {
            return;
        }

        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();

            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 100);
    }

    stop() {
        clearInterval(this.intervalId);

        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}

function testCase() {
    const clock = new AlarmClock();
    const cb = function (time) {
        console.log('alarm item ' + time);
    }
}