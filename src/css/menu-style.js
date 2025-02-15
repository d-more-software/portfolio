import styled from "styled-components";

export const Wrapper = styled.section`
	li {
		list-style: none;
	}
	.container {
		font-size: 5rem;
		color: var(--clr-font-02);
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		transition: all 0.2s ease-in-out;
	}

	a {
		position: relative;
	}
	a::before {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 0%;
		background-color: var(--clr-font-05);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		transition: all 0.6s ease-in-out;
	}
	a::after {
		content: "";
		position: absolute;
		bottom: -1rem;
		right: 0;
		height: 1px;
		width: 0%;
		background-color: var(--clr-font-05);
		transition: all 0.6s ease-in-out;
	}
	a:hover::before,
	a:hover::after {
		width: 100%;
	}

    .btn{
        position: fixed;
        top: 5rem;
        right: 5rem;
        cursor: pointer;
        font-size: 5rem;
        color: var(--clr-font-02);
        transition: all 0.2s ease-in-out;
        &:hover{
            transform: scale(1.2);
            color: var(--clr-font-05);
        }
    }

	.list {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 100vh;
	}
	.mobile-nav-container {
		width: 100%;
		backdrop-filter: blur(10px);
		z-index: 5;
		transform: translateX(-100%);
		.mobile-nav-list {
			font-size: 4rem;
			align-items: center;
		}
		.contact-container {
			/* border: 1px solid white; */
			margin: 2rem auto;
			font-size: 2rem;
			color: var(--clr-font-02);
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2rem;
			a {
				display: flex;
				align-items: center;
				gap: 1rem;
				transition: all 0.3s ease-in-out;
			}
			a:hover {
				color: var(--clr-font-06);
			}
			a::after {
				width: 0;
			}
			.social-networks {
				display: flex;
				gap: 1rem;
				a {
					font-size: 3rem;
				}
			}
		}
	}

    .mobile-nav-container-show {
        transform: translateX(0)
    }

    @media screen and (max-width: 1700px) {
		.desktop-nav-container {
			font-size: 4rem;
		}
	}

	@media screen and (max-width: 1500px) {
		.desktop-nav-container {
			font-size: 3.2rem;
		}
	}

	@media screen and (max-width: 1200px) {
		.desktop-nav-container {
			font-size: 2.8rem;
		}
	}

	@media screen and (max-width: 650px) {
		.btn {
			top: 3rem;
			right: 3rem;
		}
		.desktop-nav-container {
			font-size: 2.8rem;
		}
		.mobile-nav-container {
			.mobile-nav-list {
				font-size: 3.5rem;
			}
		}
	}
`;
