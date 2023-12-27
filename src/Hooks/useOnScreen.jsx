import { useState, useEffect } from "react";

function useOnScreen(ref, threshold = 0.3) {
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		const Observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry?.isIntersecting ?? false);
			},
			{threshold }
		);

		const currentRef = ref.current;
		if (currentRef) {
			Observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				Observer.unobserve(currentRef);
			}
		};
	}, [ref, threshold]);

	return isIntersecting;
}

export default useOnScreen;
