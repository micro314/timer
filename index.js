const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);


let duration;
animationPosition = (timeRemaining) => (perimeter * timeRemaining / duration - perimeter);

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
        console.log("Timer starting");
    },
    onTick(timeRemaining) {
        circle.setAttribute("stroke-dashoffset",
            animationPosition(timeRemaining)
        );
    },
    onComplete() {
        console.log("Timer complete");
        circle.setAttribute("stroke-dashoffset", animationPosition(0));
    },
});
