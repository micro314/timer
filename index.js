class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        console.log("start");
        this.tick();
        this.intervalId = setInterval(this.tick, 1000);
    }

    pause = () => {
        console.log("pause");
        clearInterval(this.intervalId);
    }

    tick = () => {
        this.timeRemaining = this.timeRemaining - 1;
    }

    // DOM-centric approach to data storage, done for educational purposes
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);