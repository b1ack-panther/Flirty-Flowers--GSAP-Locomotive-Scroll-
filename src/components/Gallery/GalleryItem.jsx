import React, { useEffect, useRef } from 'react'
import useOnScreen from '../../Hooks/useOnScreen';

function GalleryItem({
	src,
	title,
	subtitle,
	category,
	updateActiveImage,
	index,
}) {
	const imgRef = useRef(null);
	const onScreen = useOnScreen(imgRef, 0.6);
	useEffect(() => {
		if (onScreen) {
			updateActiveImage(index);
		}
	}, [onScreen, index, updateActiveImage]);
	return (
		<div className="gallery-item-wrapper" ref={imgRef}>
			<div />
			<div className="gallery-item">
				<div className="gallery-item-info">
					<h1 className="gallery-info-title">{title}</h1>
					<h6 className="gallery-info-subtitle">{subtitle}</h6>
					<p className="gallery-info-category">{category}</p>
				</div>
				<div
					className={`gallery-item-image  ${onScreen ? "is-visible" : ""}`}
					style={{ backgroundImage: `url(${src})` }}
				></div>
			</div>
			<div />
		</div>
	);
}

export default GalleryItem
