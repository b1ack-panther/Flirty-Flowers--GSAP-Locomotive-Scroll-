import React, {useRef } from "react";
import "./style.scss";
import useOnScreen from "../../Hooks/useOnScreen";

function Featured() {
	const firstImage =
		"https://images.unsplash.com/photo-1598838073192-05c942ede858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100";
	const secondImage =
		"https://images.unsplash.com/photo-1552248524-10d9a7e4841c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=100";

	const imgRef1 = useRef(null);
	let onScreen = useOnScreen(imgRef1);
	const imgRef2 = useRef(null);
	let onScreen1 = useOnScreen(imgRef2);

	return (
		<div className="featured-section" data-scroll-section>
			<div ref={imgRef1} className="featured-row-layout">
				<h6>green</h6>
				<img
					className={onScreen ? "is-visible" : ""}
					src={firstImage}
					data-scroll
					alt="first featured im"
				/>
			</div>
			<div ref={imgRef2} className="featured-column-layout">
				<h6> lily</h6>
				<img
					className={onScreen1 ? "is-visible" : ""}
					src={secondImage}
					data-scroll
					alt="second featured im"
				/>
			</div>
		</div>
	);
}

export default Featured;
