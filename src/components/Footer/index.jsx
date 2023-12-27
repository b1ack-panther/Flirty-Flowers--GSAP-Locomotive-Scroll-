import React, { useEffect } from "react";
import SectionHeader from "../sectionHeader";
import "./style.scss";
import gsap from "gsap";
import SplitText from "../../Hooks/Split3.min.js";

function Footer() {

	useEffect(() => {
		const split = new SplitText("#location-text", {
			type: "lines",
			linesClass: "locationChildren",
		});
		new SplitText("#location-text", {
			type: "lines",
			linesClass: "locationParent",
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#location-text",
				start: "top 70%",
				scrub: false,
			}
		})
		tl.to(split.lines, {
			duration: 1,
			stagger: 0.2,
			y: 0,
			opacity: 1,
			ease: "power2",
		});
	}, []);

	return (
		<section className="footer" data-scroll>
			<SectionHeader title="Made In" />
			<h1 className="location" id="location-text">
				Rio De Janiero
			</h1>
		</section>
	);
}

export default Footer;
