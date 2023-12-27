import React, { useEffect } from "react";
import SectionHeader from "../sectionHeader";
import "./style.scss"
import SplitText from "../../Hooks/Split3.min.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const split = new SplitText("#headline", {
			type: "lines",
			linesClass: "aboutSplit",
		});
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#headline",
				start: "top 70%",
				scrub: false,
				toggleActions: "play none none none",
			}
		})
		tl.to(split.lines,{
			duration: 1,
			stagger: 0.1,
			y: 0,
			opacity: 1,
			ease: "power2",
		});
	}, []);

	return (
    <section className={"about-section"} data-scroll>
      <SectionHeader title="About" />
			<p id="headline">
				Flirty Flowers is a blog about flowers and the floral designers who make
				them into art. Creativity and the art of 'making' require dialogue. The
				full purpose of the Flirty Flowers blog is to encourage and inspire. We
				value art, we value insight, and we value opinion.
			</p>
		</section>
	);
}

export default About;
