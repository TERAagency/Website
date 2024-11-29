import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const scrollToSection = (sectionClass) => {
		const section = document.querySelector(`.${sectionClass}`);
		if (section) {
			const sectionTop = section.getBoundingClientRect().top + window.scrollY; 
			const startY = window.scrollY; 
			const distance = sectionTop - startY; 
			const duration = 800; 
			const startTime = performance.now(); 
			
			const animateScroll = (currentTime) => {
				const elapsed = currentTime - startTime;
				const progress = Math.min(elapsed / duration, 1); 
	
				const easing = progress * (2 - progress);
				
				window.scrollTo(0, startY + distance * easing);
				
				if (elapsed < duration) {
					requestAnimationFrame(animateScroll);
				}
			};
	
			requestAnimationFrame(animateScroll);
		}
	};

	return (
		<header>
			<img className="tera__logo" src="tera__logo.png" alt="tera agency" />
			<nav ref={navRef}>
				<a onClick={()=>{scrollToSection('about__container')}}>About Us</a>
				<a onClick={()=>{scrollToSection('services__container')}}>Our Services</a>
				<a onClick={()=>{scrollToSection('contact__container')}}>Let's Talk</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
