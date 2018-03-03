let cursorPos = { x: 0, y: 0 };
let eye = document.querySelector(".eyes");
let eyeOffset = getOffset(eye);
let centerX = eyeOffset.x + eye.offsetWidth / 2;
let centerY = eyeOffset.y + eye.offsetHeight / 2;

function getOffset(element) {
	element = element.getBoundingClientRect();
	
	return {
		x: element.left + window.scrollX,
		y: element.top + window.scrollY
	};
  
}

function rotateEye() {
	let angle = -Math.atan2(cursorPos.x - centerX, cursorPos.y - centerY) * 180 / Math.PI - 180;
    eye.style.transform = `rotate(${angle}deg) translateX(0.1em)`;
};

function mousemove(event) {
	cursorPos = {
		x: event.clientX,
		y: event.clientY
	};
	
	rotateEye();
  
}

window.addEventListener("mousemove", mousemove);