import React from 'react';
import './clock.css'

const Clock = () => {
	window.addEventListener('load', () => {
	const secondHand = document.querySelector('.second-hand');
console.log(secondHand); 
const setDate = () => {
	const now = new Date();
	const seconds= now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	if(secondsDegrees === 90){
		secondHand.style.transition = `0s`;
		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	} else {
		secondHand.style.transition = `0.05s`;
		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	}
const minHand = document.querySelector('.min-hand');
	const minutes= now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	// if(minutesDegrees !== 90){
		minHand.style.transform = `rotate(${minutesDegrees}deg)`;
		// }
	const hourHand = document.querySelector('.hour-hand');
	const hours= now.getHours();
	const hoursDegrees = ((hours / 12) * 360) + 90;
	// if(hoursDegrees !== 90){
		hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	// }
}
setInterval(setDate, 1000);
})
	return (
		<div className="container">
			<div className="clock">
				<div className="clock-face">
					<div className="hand hour-hand"></div>
					<div className="hand min-hand"></div>
					<div className="hand second-hand"></div>
				</div>
			</div>
		</div>
	)
};
export default Clock;