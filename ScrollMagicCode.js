// @ts-nocheck

var controller = new ScrollMagic.Controller();

addEventListener('click', () => console.log('test'));
//hero image
//pin
new ScrollMagic.Scene({triggerHook: 0, duration: 2500, tweenChanges: true, triggerElement: '.parallax'}).addIndicators().setPin('.parallax', {pushFollowers: true}).addTo(controller);
//zoom out
const imageTween = new TimelineMax().add(TweenMax.fromTo('.myimage', 1, {transform: 'scale(1.5)'}, {transform: 'scale(1)', ease: Linear.Circ})).add(TweenMax.to('.myimage', 1, {ease: Linear.Circ}), 0);
new ScrollMagic.Scene({triggerHook: 0, duration: 2500, tweenChanges: true, triggerElement: '.parallax'}).addIndicators().setTween(imageTween).addTo(controller);
//draw path
const myPath = document.querySelector('#word');
var length = myPath.getTotalLength();
myPath.style.strokeDasharray = length;
myPath.style.strokeDashoffset = length;
const tween = new TimelineMax().add(TweenMax.to(myPath, 1, {strokeDasharray: 0, strokeDashoffset: 0, ease: Linear.Circ})).add(TweenMax.to(myPath, 1, {ease: Linear.Circ}), 0);
new ScrollMagic.Scene({triggerHook: 0, duration: 2000, tweenChanges: true, triggerElement: '.parallax'}).addIndicators().setTween(tween).addTo(controller);
//blur
const tween3 = new TimelineMax().add(TweenMax.to('.myimage', 1, {filter: 'blur(2px)', ease: Linear.Circ})).add(TweenMax.to('.myimage', 1, {ease: Linear.Circ}), 0);
new ScrollMagic.Scene({triggerHook: 0, duration: 2000, tweenChanges: true, triggerElement: '.parallax'}).addIndicators().setTween(tween3).addTo(controller);
//welcome
//pin
new ScrollMagic.Scene({triggerHook: 0, duration: '100%', tweenChanges: true, triggerElement: '.welcome'}).addIndicators().setPin('.welcome', {pushFollowers: true}).addTo(controller);
//draw path
const welcomePath = document.querySelector('#welcomeline');
var welcomePathlength = welcomePath.getTotalLength();
welcomePath.style.strokeDasharray = welcomePathlength;
welcomePath.style.strokeDashoffset = welcomePathlength;
const welcomePathtween = new TimelineMax().add(TweenMax.to(welcomePath, 1, {strokeDashoffset: 0, ease: Linear.Circ})).add(TweenMax.to(welcomePath, 1, {ease: Linear.Circ}), 0);
new ScrollMagic.Scene({triggerHook: 0, duration: '100%', tweenChanges: true, triggerElement: '.welcome'}).addIndicators().setTween(welcomePathtween).addTo(controller);
//pin hwm
new ScrollMagic.Scene({triggerHook: 0, duration: '100%', tweenChanges: true, triggerElement: '.hwm'}).addIndicators().setPin('.hwm', {pushFollowers: true}).addTo(controller);
//pin timer
new ScrollMagic.Scene({triggerHook: 0, duration: '100%', tweenChanges: true, triggerElement: '.timer'}).addIndicators().setPin('.timer', {pushFollowers: true}).addTo(controller);
//pin location
new ScrollMagic.Scene({triggerHook: 0, duration: '100%', tweenChanges: true, triggerElement: '.location'}).addIndicators().setPin('.location', {pushFollowers: true}).addTo(controller);
//pin footer
new ScrollMagic.Scene({triggerHook: 0, duration: 1000, tweenChanges: true, triggerElement: '.footer'}).addIndicators().setPin('.footer', {pushFollowers: true}).addTo(controller);
//draw thank
const thankPath = document.querySelector('#thank');
var thanklength = thankPath.getTotalLength();
thankPath.style.strokeDasharray = thanklength;
thankPath.style.strokeDashoffset = thanklength;
const thanktween = new TimelineMax().add(TweenMax.to(thankPath, 1, {strokeDasharray: 0, strokeDashoffset: 0, ease: Linear.Circ})).add(TweenMax.to(thankPath, 1, {ease: Linear.Circ}), 0);
new ScrollMagic.Scene({triggerHook: 0, duration: 1000, tweenChanges: true, triggerElement: '.footer'}).addIndicators().setTween(thanktween).addTo(controller);
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
