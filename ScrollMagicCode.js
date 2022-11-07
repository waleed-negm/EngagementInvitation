// init controller
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({ offset: 0, triggerHook: 'onLeave', duration: '2000', triggerElement: 'section.panel' }).setPin('section.panel', { pushFollowers: true }).addTo(controller);
//-----------------------------------------------------------------------------------------------
const myPath = document.querySelector('#word');
var length = myPath.getTotalLength();
console.log('length:' + length);
myPath.style.strokeDasharray = length;
myPath.style.strokeDashoffset = length;
window.addEventListener('scroll', () => {
	var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
	console.log('scrollPercentage:' + Math.round(scrollPercentage, 2));
	console.log('strokeDashoffset:' + myPath.style.strokeDashoffset);
	var drawLength = length * scrollPercentage;
	console.log('drawLength:' + drawLength);
	myPath.style.strokeDashoffset = length - drawLength;
});
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
		//counterDiv.classList.remove("hide");
	} else {
		clearInterval(counter);
		document.querySelector('.daysCount').innerText =
			document.querySelector('.hoursCount').innerText =
			document.querySelector('.minutesCount').innerText =
			document.querySelector('.secondsCount').innerText =
				0;
		//document.querySelector('.counterDiv').classList.add('hide');
	}
};
var counter = setInterval(() => countdown(), 1000);
