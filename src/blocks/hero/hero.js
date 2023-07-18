import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

(() => {
	gsap.to('img.hero__fish', {
		scrollTrigger: {
			trigger: "img.hero__fish",
			start: "-200px 0",
			end: "+=300",
			scrub: 1.5,
			markers: false,
		},
		y: -100,
		x: -20
	})

})();
