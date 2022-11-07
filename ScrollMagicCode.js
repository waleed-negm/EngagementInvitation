// init controller
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({ offset: 0, triggerHook: "onLeave", duration: "2000", triggerElement: "section.panel" }).setPin("section.panel", { pushFollowers: true }).addTo(controller);
//-----------------------------------------------------------------------------------------------
var myPath = document.querySelector("#word");
var length = myPath.getTotalLength();
myPath.style.strokeDasharray = length;
myPath.style.strokeDashoffset = length;
var tween = new TimelineMax().add(TweenMax.to(myPath, 4, { strokeDashoffset: 0, ease: Linear.easeNone })).add(TweenMax.to("path#word", 1, { stroke: "#000000", ease: Linear.easeNone }), 0);
var Scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: 2000,
    tweenChanges: true,
})
    .setTween(tween)
    .addTo(controller);
//-----------------------------------------------------------------------------------------------

const countdown = () => {
    const countDate = new Date("December 1,2022 19:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    if (gap > 0) {
        document.querySelector(".daysCount").innerText = Math.floor(gap / day);
        document.querySelector(".hoursCount").innerText = Math.floor((gap % day) / hour);
        document.querySelector(".minutesCount").innerText = Math.floor((gap % hour) / minute);
        document.querySelector(".secondsCount").innerText = Math.floor((gap % minute) / second);
        //counterDiv.classList.remove("hide");
    } else {
        clearInterval(counter);
        document.querySelector(".daysCount").innerText =
            document.querySelector(".hoursCount").innerText =
            document.querySelector(".minutesCount").innerText =
            document.querySelector(".secondsCount").innerText =
                0;
        //document.querySelector('.counterDiv').classList.add('hide');
    }
};
var counter = setInterval(() => countdown(), 1000);
