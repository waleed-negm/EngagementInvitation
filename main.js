// @ts-nocheck
AOS.init();
const preloadingPage = document.querySelector('.preloadingPage');
let pinHeight = window.innerHeight * 1.7;
let viewportHeight = window.innerHeight * 1.1;
console.log(pinHeight);
console.log(viewportHeight);
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        document.body.style.overflow = 'auto';
        window.scrollTo({top: 0});
        document.querySelector('.pos').classList.add('animate__animated', 'animate__slow', 'animate__fadeInLeft');
        document.querySelector('.std').classList.add('animate__animated', 'animate__slow', 'animate__fadeIn');
        document.querySelector('.date').classList.add('animate__animated', 'animate__slow', 'animate__fadeInRight');
        preloadingPage.style.opacity = '0';
        preloadingPage.style.zIndex = '-1';
    } else document.body.style.overflow = 'hidden';
};
if (preloadingPage.style.opacity == 0) preloadingPage.style.display = 'none';
var controller = new ScrollMagic.Controller();
//hero image
//pin
new ScrollMagic.Scene({triggerHook: 0, duration: pinHeight, tweenChanges: true, triggerElement: '.parallax'}).setPin('.parallax', {pushFollowers: true}).addTo(controller);
//zoom out
const imageTween = new TimelineMax().add(TweenMax.fromTo('.myimage', 1, {transform: 'scale(1.5)'}, {transform: 'scale(1)', ease: Linear.Circ})).add(TweenMax.to('.myimage', 1, {ease: Linear.Circ}), 0);
new ScrollMagic.Scene({triggerHook: 0, duration: viewportHeight, tweenChanges: true, triggerElement: '.parallax'}).setTween(imageTween).addTo(controller);
//draw path
const myPath = document.querySelector('#word');
var length = myPath.getTotalLength();
myPath.style.strokeDasharray = length;
myPath.style.strokeDashoffset = length;
const tween = new TimelineMax().add(TweenMax.to(myPath, 1, {strokeDasharray: 0, strokeDashoffset: 0, ease: Linear.Circ})).add(TweenMax.to(myPath, 1, {ease: Linear.Circ}), 0);
new ScrollMagic.Scene({triggerHook: 0, duration: viewportHeight, tweenChanges: true, triggerElement: '.parallax'}).setTween(tween).addTo(controller);
//blur
const tween3 = new TimelineMax().add(TweenMax.to('.myimage', 1, {filter: 'blur(2px)', ease: Linear.Circ})).add(TweenMax.to('.myimage', 1, {ease: Linear.Circ}), 0);
new ScrollMagic.Scene({triggerHook: 0, duration: viewportHeight, tweenChanges: true, triggerElement: '.parallax'}).setTween(tween3).addTo(controller);
//welcome
//pin
new ScrollMagic.Scene({triggerHook: 0, duration: pinHeight, tweenChanges: true, triggerElement: '.welcome'}).setPin('.welcome', {pushFollowers: true}).addTo(controller);
//draw path
const welcomebacksvgPath = document.querySelector('#welcomebacksvg');
const welcomePathtween = new TimelineMax().add(TweenMax.fromTo(welcomebacksvgPath, 1, {scale: 0}, {scale: 1, ease: Linear.Circ})).add(TweenMax.to(welcomebacksvgPath, 1, {ease: Linear.Circ}), 0);
new ScrollMagic.Scene({triggerHook: 0, duration: viewportHeight, tweenChanges: true, triggerElement: '.welcome'}).setTween(welcomePathtween).addTo(controller);
//pin hwm
new ScrollMagic.Scene({triggerHook: 0, duration: pinHeight, tweenChanges: true, triggerElement: '.hwm'}).setPin('.hwm', {pushFollowers: true}).addTo(controller);
//pin timer
new ScrollMagic.Scene({triggerHook: 0, duration: pinHeight, tweenChanges: true, triggerElement: '.timer'}).setPin('.timer', {pushFollowers: true}).addTo(controller);
//pin location
new ScrollMagic.Scene({triggerHook: 0, duration: pinHeight, tweenChanges: true, triggerElement: '.location'}).setPin('.location', {pushFollowers: true}).addTo(controller);
//pin footer
new ScrollMagic.Scene({triggerHook: 0, duration: pinHeight, tweenChanges: true, triggerElement: '.footer'}).setPin('.footer', {pushFollowers: true}).addTo(controller);
//draw thank
const thankPath = document.querySelector('#thank');
var thanklength = thankPath.getTotalLength();
thankPath.style.strokeDasharray = thanklength;
thankPath.style.strokeDashoffset = thanklength;
const thanktween = new TimelineMax().add(TweenMax.to(thankPath, 1, {strokeDasharray: 0, strokeDashoffset: 0, ease: Linear.Circ})).add(TweenMax.to(thankPath, 1, {ease: Linear.Circ}), 0);
new ScrollMagic.Scene({triggerHook: 0, duration: viewportHeight, tweenChanges: true, triggerElement: '.footer'}).setTween(thanktween).addTo(controller);
//count down
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
