import { useEffect, useState } from "react";
import { Wrapper } from "../css/menu-style";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

export default function Menu() {
	const [desktopMode, setDesktopMode] = useState(false);
	const year = new Date().getFullYear();

	const closeMobileMenu = () => {
		const mobileMenu = document.getElementById("mobile-nav-container");
		mobileMenu.classList.remove("mobile-nav-container-show");
	};

	const openMobileMenu = () => {
		const mobileMenu = document.getElementById("mobile-nav-container");
		mobileMenu.classList.add("mobile-nav-container-show");
	};

	useEffect(() => {

	const initView = () => {
		const width = window.innerWidth;
		if (width >= 1000) {
			setDesktopMode(true);
		} else {
			setDesktopMode(false);
		}
	};
		window.addEventListener("resize", initView);
		initView();

		return () => 
			window.removeEventListener("resize", initView);
		;
	}, []);

	return (
		<Wrapper>
			{!desktopMode && (
				<div className="btn" onClick={openMobileMenu}>
					<CiMenuBurger />
				</div>
			)}
			{desktopMode ? (
				<div className="container desktop-nav-container">
					<ul className="list desktop-nav-list">
						<li>
							<a href="#about" data-text="&#x27F4;About">
								&#x27F4;About
							</a>
						</li>
						<li>
							<a href="#projects" data-text="&#x27F4;Projects">
								&#x27F4;Projects
							</a>
						</li>
						<li>
							<a href="#contact" data-text="&#x27F4;Contact">
								&#x27F4;Contact
							</a>
						</li>
					</ul>
				</div>
			) : (
				<div
					className="container mobile-nav-container"
					id="mobile-nav-container"
				>
					<div className="btn" onClick={closeMobileMenu}>
						<IoIosCloseCircleOutline />
					</div>
					<ul className="list mobile-nav-list">
						<li>
							<a
								href="#about"
								data-text="&#x27F4;About"
								onClick={closeMobileMenu}
							>
								&#x27F4;About
							</a>
						</li>
						<li>
							<a
								href="#projects"
								data-text="&#x27F4;Projects"
								onClick={closeMobileMenu}
							>
								&#x27F4;Projects
							</a>
						</li>
						<li>
							<a
								href="#contact"
								data-text="&#x27F4;Contact"
								onClick={closeMobileMenu}
							>
								&#x27F4;Contact
							</a>
						</li>
						<div className="contact-container">
							<a href="#">
								<MdOutlineLocationOn />
								Paris, France
							</a>
							<a href="mailto:john-doe@test.com">
								<FiMail />
								john-doe@test.com
							</a>
							<a href="tel:0033645789652">
								<BsTelephone />
								+33 6 45 78 96 52
							</a>

							<div className="social-networks">
								<a
									href="https//:www.linkin.com/in/Jdoe"
									target="_blank"
								>
									<BsLinkedin />
								</a>
								<a
									href="https//:github.com/johnD"
									target="_blank"
								>
									<FaGithub />
								</a>
							</div>
							<p>-{year}-</p>
						</div>
					</ul>
				</div>
			)}
		</Wrapper>
	);
}
