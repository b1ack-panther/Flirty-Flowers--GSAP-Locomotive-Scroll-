import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/bundled/locomotive-scroll.css";
import "./locoScrollBaseCSS.css";
import { useEffect } from "react";

function useLocoScroll(start) {
	useEffect(() => {
		if (!start) return;
		// const scrollEl = document.querySelector(".App");
		// const locoScroll = new LocomotiveScroll({
		// 	el: scrollEl,
		// 	smooth: true,
		// 	class: "is-reveal",
		// 	multiplier: 1,
    // });
    const locoScroll = new LocomotiveScroll();
		return () => locoScroll.destroy();
	}, [start]);
}

export default useLocoScroll;
