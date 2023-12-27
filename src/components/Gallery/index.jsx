import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GalleryItem from "./GalleryItem.jsx";

const images = [
	{
		src: "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp",
		title: "Dracaena Trifasciata",
		subtitle: "Live the Beauty",
		category: "Shooting / Adv. Campaing",
	},
	{
		src: "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp",
		title: "Cereus Penuvianus",
		subtitle: "Live the Beauty",
		category: "Shooting / Adv.Campaing",
	},
	{
		src: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp",
		title: "Calliope",
		subtitle: "Live the Beauty",
		category: "Shooting / Adv. Campaing",
	},
	{
		src: "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp",
		title: "Golden Pothos",
		subtitle: "Living Room",
		category: "Shooting / Adv. Campaing",
	},
];

function Gallery() {
	const [activeImage, setActiveImage] = useState(0);
	gsap.registerPlugin(ScrollTrigger);

	const ref = useRef(null);

	// function GalleryItem({
	// 	src,
	// 	title,
	// 	subtitle,
	// 	category,
	// 	updateActiveImage,
	// 	index,
	// }) {
	// 	const imgRef = useRef(null);
	// 	const onScreen = useOnScreen(imgRef, 0.8);
	// 	useEffect(() => { 
	// 		if (onScreen) {
	// 			// setActiveImage(index)
	// 			console.log(index);
	// 		}
	// 	}, [onScreen, index])
	// 	return (
	// 		<div className="gallery-item-wrapper" ref={imgRef}>
	// 			<div />
	// 			<div className="gallery-item">
	// 				<div className="gallery-item-info">
	// 					<h1 className="gallery-info-title">{title}</h1>
	// 					<h6 className="gallery-info-subtitle">{subtitle}</h6>
	// 					<p className="gallery-info-category">{category}</p>
	// 				</div>
	// 				<div
	// 					className="gallery-item-image"
						
	// 					style={{ backgroundImage: `url(${src})` }}
	// 				></div>
	// 			</div>
	// 			<div />
	// 		</div>
	// 	);
	// }

	useEffect(() => {
		const ctx = gsap.context(() => {
			const sections = gsap.utils.toArray(".gallery-item-wrapper");
			gsap.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: ref.current,
					start: "top top",
					end: () => "+=" + ref.current.offsetWidth,
					pin: true,
					scrub: true,
					snap: 1 / (sections.length - 1),
				},
			});
			ScrollTrigger.refresh();
		}, ref);
		return () => ctx.revert();
	}, []);

	return (
		<div className="section-wrapper gallery-wrap" data-scroll-speed="-0.2">
			<div className="gallery" ref={ref}>
				<div className="gallery-counter">
					<span>{activeImage}</span>
					<span className="divider" />
					<span>{images.length}</span>
				</div>
				{images.map((image, index) => {
					return (
						<GalleryItem
							key={image.src}
							{...image}
							index={index}
							updateActiveImage={(index) => setActiveImage(index + 1)}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Gallery;
