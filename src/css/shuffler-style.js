import styled from "styled-components";

export const Wrapper = styled.aside`
	margin: 2rem auto 0 auto;
	width: fit-content;
	font-size: 3rem;
	color: var(--clr-font-02);
	font-weight: bold;
	.container {
		height: 50px;
		cursor: pointer;
		overflow: hidden;
		.element {
			height: 50px;
			text-align: center;
			display: block;
			letter-spacing: 2rem;
		}
	}

	.container:hover .element {
		animation: shuffle steps(10) 1.2s;
	}

	@keyframes shuffle {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-500px);
		}
	}

    @media screen and (max-width: 650px) {
		margin-top: 15rem;
		font-size: 2.2rem;
	}
`;
