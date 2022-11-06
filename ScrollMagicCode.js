$(function () {
	var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: 'onLeave', duration: '100%' } });
	var slides = document.querySelectorAll('section.panel');
	for (var i = 0; i < slides.length; i++)
		new ScrollMagic.Scene({ triggerElement: slides[i] }).setPin(slides[i], { pushFollowers: false }).addTo(controller);
});

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
		counterDiv.classList.remove('hide');
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
