import { Wrapper } from "../css/section-style";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
	const year = new Date().getFullYear();

	return (
		<Wrapper id="contact">
			<div className="relative-container">
				<div className="main-title">Contact</div>
				<div className="second-title">Interested ?</div>
			</div>

			<div className="contact-container">
				<a href="#">
					<MdOutlineLocationOn />
					Paris, France
				</a>
				<a href="mailto:md.moredavid@protonmail.com">
					<FiMail />
					md.moredavid@protonmail.com
				</a>
				{/* <a href="tel:0033645789652">
					<BsTelephone />
					+33 6 45 78 96 52
				</a> */}

				<div className="social-networks">
					<a
						href="https://www.linkedin.com/in/david-more-software/"
						target="_blank"
					>
						<BsLinkedin />
					</a>
					<a
						href="https://github.com/d-more-software"
						target="_blank"
					>
						<FaGithub />
					</a>
				</div>
				<p>-{year}-</p>
			</div>
		</Wrapper>
	);
}
