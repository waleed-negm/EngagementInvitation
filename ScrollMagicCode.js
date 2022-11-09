// @ts-nocheck
var controller = new ScrollMagic.Controller();
const myPath = document.querySelector('#word');
var length = myPath.getTotalLength();
myPath.style.strokeDasharray = length;
myPath.style.strokeDashoffset = length;
const myPath2 = document.querySelector('#word2');
var length2 = myPath.getTotalLength();
myPath2.style.strokeDasharray = length2;
myPath2.style.strokeDashoffset = length2;
//pin image
new ScrollMagic.Scene({ triggerHook: 0, duration: '100%', tweenChanges: true, triggerElement: '.parallax' }).addIndicators().setPin('.parallax', { pushFollowers: true }).addTo(controller);
//pin welcome
new ScrollMagic.Scene({ triggerHook: 0, duration: '100%', tweenChanges: true, triggerElement: '.welcome' }).addIndicators().setPin('.welcome', { pushFollowers: true }).addTo(controller);
//pin hwm
new ScrollMagic.Scene({ triggerHook: 0, duration: '100%', tweenChanges: true, triggerElement: '.hwm' }).addIndicators().setPin('.hwm', { pushFollowers: true }).addTo(controller);
//pin timer
new ScrollMagic.Scene({ triggerHook: 0, duration: '100%', tweenChanges: true, triggerElement: '.timer' }).addIndicators().setPin('.timer', { pushFollowers: true }).addTo(controller);
//pin location
new ScrollMagic.Scene({ triggerHook: 0, duration: '100%', tweenChanges: true, triggerElement: '.location' }).addIndicators().setPin('.location', { pushFollowers: true }).addTo(controller);
//zoom out
const tween2 = new TimelineMax().add(TweenMax.to('.img', 1, { backgroundSize: '130%', ease: Linear.Circ })).add(TweenMax.to('.img', 1, { ease: Linear.Circ }), 0);
new ScrollMagic.Scene({ triggerHook: 0, duration: '100%', tweenChanges: true, triggerElement: '.parallax' }).addIndicators().setTween(tween2).addTo(controller);
//draw path
const tween = new TimelineMax().add(TweenMax.to(myPath, 1, { strokeDashoffset: 0, ease: Linear.Circ })).add(TweenMax.to(myPath, 1, { ease: Linear.Circ }), 0);
new ScrollMagic.Scene({ triggerHook: 0, duration: 2500, tweenChanges: true, triggerElement: '.parallax' }).addIndicators().setTween(tween).addTo(controller);
//draw path2
const tween4 = new TimelineMax().add(TweenMax.to(myPath2, 1, { strokeDashoffset: 0, ease: Linear.Circ })).add(TweenMax.to(myPath2, 1, { ease: Linear.Circ }), 0);
new ScrollMagic.Scene({ triggerHook: 0, duration: 2500, tweenChanges: true, triggerElement: '.welcome' }).addIndicators().setTween(tween4).addTo(controller);
//blur
const tween3 = new TimelineMax().add(TweenMax.to('.img', 1, { filter: 'blur(2px)', ease: Linear.Circ })).add(TweenMax.to('.img', 1, { ease: Linear.Circ }), 0);
new ScrollMagic.Scene({ triggerHook: 0, duration: 2000, tweenChanges: true, triggerElement: '.parallax' }).addIndicators().setTween(tween3).addTo(controller);
//-----------------------------------------------------------------------------------------------

const countdown = () => {
    const countDate = new Date('December 1,2022 19:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    if (gap > 0) {
        document.querySelector('.daysCount').innerText = Math.floor(gap / day);
        document.querySelector('.hoursCount').innerText = Math.floor((gap % day) / hour);
        document.querySelector('.minutesCount').innerText = Math.floor((gap % hour) / minute);
        document.querySelector('.secondsCount').innerText = Math.floor((gap % minute) / second);
    } else {
        clearInterval(counter);
        document.querySelector('.daysCount').innerText =
            document.querySelector('.hoursCount').innerText =
            document.querySelector('.minutesCount').innerText =
            document.querySelector('.secondsCount').innerText =
                0;
    }
};
var counter = setInterval(() => countdown(), 1000);
