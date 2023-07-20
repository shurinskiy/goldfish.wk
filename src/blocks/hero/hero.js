import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

(() => {
	const fish = document.querySelector('img.hero__fish');

	if (fish) {
		gsap.matchMedia().add("(min-width: 780px)", () => {
			gsap.to(fish, {
				scrollTrigger: {
					trigger: "img.hero__fish",
					start: "-200px 0",
					end: "+=300",
					scrub: 1.5,
					// markers: true,
				},
				y: -100,
				x: -20
			});
		});
		
		gsap.matchMedia().add("(max-width: 781px)", () => {
			gsap.to(fish, {
				scrollTrigger: {
					trigger: "img.hero__fish",
					start: "-100px 0",
					end: "+=350",
					scrub: 1.5,
					// markers: true,
				},
				y: 100,
				x: 20
			});
		});
	}

})();