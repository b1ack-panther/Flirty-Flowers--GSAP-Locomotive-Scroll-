// import React, { useEffect, useRef } from "react";
// import "./style.scss";

// function CustomCursor() {
// 	const secondaryCursor = useRef(null);
// 	const positionRef = useRef({
// 		mouseX: 0,
// 		mouseY: 0,
// 		distanceX: 0,
// 		distanceY: 0,
// 		destinationX: 0,
// 		destinationY: 0,
// 		key: -1,
// 	});

// 	useEffect(() => {
//     document.addEventListener("mousemove", (e) => {
// 			const { clientX, clientY } = e;
// 			const mouseX = clientX;
// 			const mouseY = clientY;

// 			positionRef.current.mouseX =
// 				mouseX - secondaryCursor.current.clientWidth / 2;
// 			positionRef.current.mouseY =
//         mouseY - secondaryCursor.current.clientHeight / 2;
// 		});
// 	}, []);

// 	useEffect(() => {
// 		const followMouse = () => {
// 			positionRef.current.key = requestAnimationFrame(followMouse);
// 			const {
// 				destinationX,
// 				destinationY,
// 				distanceX,
// 				distanceY,
// 				mouseX,
// 				mouseY,
// 			} = positionRef.current;
// 			if (!positionRef.current.destinationX || !positionRef.current.destinationY) {
// 				positionRef.current.destinationX = positionRef.current.mouseX;
// 				positionRef.current.destinationY = positionRef.current.mouseY;
// 			} else {
// 				positionRef.current.distanceX = positionRef.current.mouseX - positionRef.current.destinationX;
// 				positionRef.current.distanceY = positionRef.current.mouseY - positionRef.current.destinationY;
// 				if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1) {
// 					positionRef.current.destinationX = positionRef.current.mouseX;
// 					positionRef.current.destinationY = positionRef.current.mouseY;
// 				} else {
// 					positionRef.current.destinationX += positionRef.current.distanceX * 0.1;
// 					positionRef.current.destinationY += positionRef.current.distanceY * 0.1;
// 				}
//       }
//       if (secondaryCursor && secondaryCursor.current) {
//         secondaryCursor.current.style.transform = `translate(${destinationX}px, ${destinationY}px)`
//       }
// 		};
// 		followMouse();
// 	}, []);

// 	return (
// 		<div className={`cursor-wrapper default`}>
// 			<div className="secondary-cursor" ref={secondaryCursor}></div>
// 		</div>
// 	);
// }

// export default CustomCursor;

import React, { useEffect, useRef, useState } from "react";
import "./style.scss";

function CustomCursor() {
	const secondaryCursor = useRef(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMousemve = (e) => {
		if (secondaryCursor) {
			const offsetX =
				e.clientX + window.scrollX - secondaryCursor.current.clientWidth / 2;
			const offsetY =
				e.clientY + window.scrollY - secondaryCursor.current.clientHeight / 2;
			setPosition({ x: offsetX, y: offsetY });
		}
	};

	useEffect(() => {
		document.addEventListener("mousemove", handleMousemve);
		return () => document.removeEventListener("mousemove", handleMousemve);
	}, []);

	return (
		<div
			style={{ top: `${position.y}px`, left: `${position.x}px` }}
			className="secondary-cursor"
			ref={secondaryCursor}
		></div>
	);
}

export default CustomCursor;
