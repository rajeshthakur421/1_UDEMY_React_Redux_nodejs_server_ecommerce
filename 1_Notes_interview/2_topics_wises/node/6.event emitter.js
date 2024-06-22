const EventEmitter = require('events');

class Countdown extends EventEmitter {
  constructor(seconds) {
    super();
    this.seconds = seconds;
  }

  start() {
    const interval = setInterval(() => {
      if (this.seconds === 0) {
        this.emit('end');
        clearInterval(interval);
      } else {
        this.emit('tick', this.seconds);
        this.seconds -= 1;
      }
    }, 1000);
  }
}

const countdown = new Countdown(5);

countdown.on('tick', (seconds) => {
  console.log(`Time left: ${seconds}s`);
});

countdown.on('end', () => {
  console.log('Countdown finished');
});

countdown.start();
