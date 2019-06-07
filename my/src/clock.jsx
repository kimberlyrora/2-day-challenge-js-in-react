import React, { Component } from 'react';
import './clock.css'

class Clock extends Component {
	constructor() {
		super ();
		this.element = React.createRef()
		this.other = React.createRef()
		this.another = React.createRef()
		this.changeStyle =  this.changeStyle.bind(this)
	}
	componentDidMount() {
		window.addEventListener('load', this.changeStyle);
	}
	componentWillUnmount() { 
		window.removeEventListener('load', this.changeStyle) 
	}
	changeStyle() {
    // console.log(this.element)
		const setDate = () => {
				const now = new Date();
				const seconds= now.getSeconds();
				const secondsDegrees = ((seconds / 60) * 360) + 90;
				if(secondsDegrees === 90){
					this.element.current.style.transform = `rotate(${secondsDegrees}deg)`;
					this.element.current.style.transition = `0s`;
				} else {
					// this.element.current.style.transform = `rotate(${secondsDegrees})`;
					this.element.current.style.transition = `0s`;
					this.element.current.style.transform = `rotate(${secondsDegrees}deg)`;
					}
				const minutes= now.getMinutes();
				const minutesDegrees = ((minutes / 60) * 360) + 90;
			// 	// if(minutesDegrees !== 90){
					this.other.current.style.transform = `rotate(${minutesDegrees}deg)`;
			// 		// }
				const hours= now.getHours();
				const hoursDegrees = ((hours / 12) * 360) + 90;
			// 	// if(hoursDegrees !== 90){
					this.another.current.style.transform = `rotate(${hoursDegrees}deg)`;
			// 		// }
	// 		}
	// 		setInterval(setDate, 1000);
  }
// 	window.addEventListener('load', () => {
// 	const secondHand = document.querySelector('.second-hand');
// console.log(secondHand); 
// const setDate = () => {
// 	const now = new Date();
// 	const seconds= now.getSeconds();
// 	const secondsDegrees = ((seconds / 60) * 360) + 90;
// 	if(secondsDegrees === 90){
// 		secondHand.style.transition = `0s`;
// 		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
// 	} else {
// 		secondHand.style.transition = `0.05s`;
// 		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
// 	}
// const minHand = document.querySelector('.min-hand');
// 	const minutes= now.getMinutes();
// 	const minutesDegrees = ((minutes / 60) * 360) + 90;
// 	// if(minutesDegrees !== 90){
// 		minHand.style.transform = `rotate(${minutesDegrees}deg)`;
// 		// }
// 	const hourHand = document.querySelector('.hour-hand');
// 	const hours= now.getHours();
// 	const hoursDegrees = ((hours / 12) * 360) + 90;
// 	// if(hoursDegrees !== 90){
// 		hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
// 	// }
setInterval(setDate, 1000);
}
render() {
	return (
		<div className="container" >
			<div className="clock">
				<div className="clock-face">
					<div ref={this.element} className="hand hour-hand"></div>
					<div ref={this.other} className="hand min-hand"></div>
					<div ref={this.another} className="hand second-hand"></div>
				</div>
			</div>
		</div>
	)
}
}

export default Clock;