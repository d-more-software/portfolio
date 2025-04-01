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
					I’m a passionate front-end developer dedicated to crafting
					intuitive, visually appealing, and highly responsive user
					interfaces. With a strong focus on delivering seamless user
					experiences, I leverage modern technologies like React,
					JavaScript, and CSS to build engaging web applications.
				</p>
			</div>
		</Wrapper>
	);
}
