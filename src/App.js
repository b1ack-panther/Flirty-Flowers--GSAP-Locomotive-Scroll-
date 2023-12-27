// import { useEffect, useRef, useState } from "react";
// import "./App.scss";
// import About from "./components/About";
// import Featured from "./components/Featured";
// import Footer from "./components/Footer";
// import Gallery from "./components/Gallery";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import CustomCursor from "./customCursor/CustomCursor";
// import useLocoScroll from "./Hooks/useLocoScroll";

// function App() {
//   const [preLoader, setPreLoader] = useState(true);
//   const timerRef = useRef(null);
//   const [timer, setTimer] = useState(3);
//   useLocoScroll(!preLoader)

//   useEffect(() => {
// 		timerRef.current = setInterval(() => {
// 			setTimer((prevTimer) => prevTimer - 1);
// 		}, 1000);

// 		return () => {
// 			clearInterval(timerRef.current);
// 		};
// 	}, []);

// 	useEffect(() => {
// 		if (timer === 0) {
// 			clearInterval(timerRef.current);
// 			setPreLoader(false);
// 		}
// 	}, [timer]);

// 	return (
// 		<>
// 			<CustomCursor />
// 			{preLoader ? (
// 				<div className="loader-wrapper absolute">
// 					<h1>Flirty Flowers </h1>
// 					<h2>Rio De Janiero</h2>
// 				</div>
// 			) : (
//           <div className="App" data-scroll-container
//           >
// 					<Navbar />
// 					<Header />
// 					<Featured />
// 					<About />
// 					<Gallery />
// 					<Footer />
// 				</div>
// 			)}
// 		</>
// 	);
// }

// export default App;

import { useEffect, useRef, useState } from "react";
import "./App.scss";
import About from "./components/About";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CustomCursor from "./customCursor/CustomCursor";
import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/bundled/locomotive-scroll.css";

function App() {
	const [preLoader, setPreLoader] = useState(true);
	const timerRef = useRef(null);
	const [timer, setTimer] = useState(3);

	useEffect(() => {
		if (preLoader) return;
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".App"),
      smooth: true,
      class: "is-reveal",
      multiplier: 1,
    });

    return () => locoScroll.destroy();

	}, [preLoader]);

	useEffect(() => {
		timerRef.current = setInterval(() => {
			setTimer((prevTimer) => prevTimer - 1);
		}, 1000);

		return () => {
			clearInterval(timerRef.current);
		};
	}, []);

	useEffect(() => {
		if (timer === 0) {
			clearInterval(timerRef.current);
			setPreLoader(false);
		}
	}, [timer]);

	return (
		<>
			<CustomCursor />
			{preLoader ? (
				<div className="loader-wrapper absolute">
					<h1>Flirty Flowers </h1>
					<h2>Rio De Janiero</h2>
				</div>
			) : (
				<div className="App" data-scroll-container>
					<Navbar />
					<Header />
					<Featured />
					<About />
					<Gallery />
					<Footer />
				</div>
			)}
		</>
	);
}

export default App;
