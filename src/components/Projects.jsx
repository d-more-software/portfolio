import React, { useState } from "react";
import { Wrapper } from "../css/section-style";
import { projects } from "../data";

export const Projects = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const increaseIndex = () => {
		if (selectedIndex < projects.length - 1) {
			setSelectedIndex((oldState) => oldState + 1);
		}
	};

	const decreaseIndex = () => {
		if (selectedIndex > 0) {
			setSelectedIndex((oldState) => oldState - 1);
		}
	};

	return (
		<Wrapper id="projects">
			<div className="relative-container">
				<div className="main-title">Projects</div>
				<div className="second-title">some of my works</div>
			</div>
			<div className="projects-container">
				<div className="projects-image-container">
					<button className="btn prev-btn" onClick={decreaseIndex}>
						&#x3c;&#x3c;
					</button>
					<a href={projects[selectedIndex].url}>
						<img
							src={projects[selectedIndex].imageSRC}
							alt=""
							className="project-image"
						/>
					</a>
					<button className="btn next-btn" onClick={increaseIndex}>
						&#x3e;&#x3e;
					</button>
				</div>
				<div className="projects-text-container">
					<p className="projects-text-title">
						{projects[selectedIndex].title}
					</p>
					<p className="projects-text-desc">
						{projects[selectedIndex].desc}
					</p>
				</div>
			</div>
		</Wrapper>
	);
};
