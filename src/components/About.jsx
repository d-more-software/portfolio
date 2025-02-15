import { Wrapper } from "../css/section-style";

export default function About() {
	return (
		<Wrapper id="about">
			<div className="relative-container">
				<div className="main-title">About</div>
				<div className="second-title">...myself</div>
			</div>
			<div className="about-container">
				<p>
					I am a front-end developer who creates user interfaces that
					are intuitive, nice, and responsive.
				</p>
			</div>
		</Wrapper>
	);
}
