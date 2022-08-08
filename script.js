'use strict';

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
const watch = document.querySelector('.time');

// let [hour, minutes, sec, millisec] = [0, 0, 0, 0];
let hour = 0;
let sec = 0;
let minutes = 0;
let millisec = 0;
let startTimer;

const start = function () {
	startTimer = setInterval(function () {
		millisec++;

		if (millisec === 100) {
			millisec = 0;
			sec++;

			if (sec === 60) {
				sec = 0;
				minutes++;

				if (minutes === 60) {
					minutes = 0;
					hour++;
				}
			}
		}
		hour = hour < 10 ? String(hour).padStart(2, '0') : hour;
		minutes = minutes < 10 ? String(minutes).padStart(2, '0') : minutes;
		sec = sec < 10 ? String(sec).padStart(2, '0') : sec;
		millisec = millisec < 10 ? String(millisec).padStart(2, '0') : millisec;
		document.querySelector(
			'.time'
		).innerHTML = `${hour} : ${minutes} : ${sec} : ${millisec}`;
	}, 10);
};

const stop = () => clearInterval(startTimer);

const reset = () => {
	clearInterval(startTimer);
	[hour, minutes, sec, millisec] = [0, 0, 0, 0];
	document.querySelector('.time').innerHTML = `00 : 00 : 00 : 00`;
};
startButton.addEventListener('click', start);

stopButton.addEventListener('click', stop);

resetButton.addEventListener('click', reset);
