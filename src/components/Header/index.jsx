import React, { useEffect } from 'react'
import "./style.scss"
import gsap from 'gsap';
import SplitText from "../../Hooks/Split3.min.js"

function Header() {

	useEffect(() => { 
		const split = new SplitText("#header-text", {
			type: "lines",
			linesClass: "lineChildren"
		});
		new SplitText("#header-text", {
			type: "lines",
			linesClass: "lineParent"
		});
		
		gsap.to(split.lines, {
			duration: 1,
			stagger: 0.2,
			y: 0,
			opacity: 1,
			ease: "power2.out",
		})

	}, [])

  return (
		<div className="header-container" >
			<ul className="header-menu">
				<li>Intro</li>
				<li>About </li>
				<li>Feature</li>
			</ul>
			<h1 id="header-text">Art Objects</h1>
		</div>
	);
}

export default Header
