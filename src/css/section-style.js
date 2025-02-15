import styled from "styled-components";

export const Wrapper = styled.section`
	width: 80%;
	margin: 25rem auto;
	text-align: center;
	min-height: 20vh;

	.relative-container {
		position: relative;
		.main-title {
			color: var(--clr-font-06);
			font-size: 20rem;
			letter-spacing: 2rem;
			text-transform: uppercase;
		}
		.second-title {
			position: absolute;
			top: 65%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: var(--clr-font-01);
			font-size: 6rem;
			width: 80%;
		}
	}
	.about-container {
		color: var(--clr-font-02);
		font-size: 3rem;
		font-style: italic;
        /* margin: 2rem auto;
		width: 80%; */
	}
    .contact-container{
        margin: 2rem auto;
        font-size: 2rem;
        color: var(--clr-font-02);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        a{
            display: flex;
            align-items: center;
            gap: 1rem;
            transition: all 0.3s ease-in-out;
        }
        a:hover{
            color: var(--clr-font-06);
        }
        .social-networks{
            display: flex;
            gap: 1rem;
            a{
                font-size: 3rem;
            }
        }
    }
    .projects-container{
            width: 80%;
            margin: 0 auto;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 1rem;
            .projects-image-container{
                width: 40rem;
                height: 50rem;
                position: relative;
                .project-image{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .btn{
                    position: absolute;
                    font-size: 3rem;
                    border: none;
                    background-color: var(--clr-bkg);
                    cursor: pointer;
                    color: var(--clr-font-06);
                    padding: 1rem;
                    transition: all 0.2s ease-in-out;
                    &:hover{
                        color: var(--clr-font-02);
                    }
                } 
                .prev-btn{
                    top: -1rem;
                    left: -1rem;
                }
                .next-btn{
                    bottom: -1rem;
                    right: -1rem;
                }
            }
            .projects-text-container{
                color: var(--clr-font-02);
                .projects-text-title{
                    font-size: 3rem;
                }
                .projects-text-desc{
                    color: var(--clr-font-04);
                    font-size: 2rem;
                    margin-top: 2rem;
                }
            }
        }

    
	@media screen and (max-width: 1700px) {
		.relative-container {
			.main-title {
				font-size: 15rem;
			}
		}
	}

	@media screen and (max-width: 1400px) {
		.relative-container {
			.main-title {
				font-size: 10rem;
			}
			.second-title {
				font-size: 4rem;
			}
		}
		.projects-container {
			.projects-image-container {
				width: 30rem;
				height: 40rem;
			}
		}
	}

	@media screen and (max-width: 1200px) {
		.relative-container {
			.second-title {
				font-size: 3.5rem;
			}
		}
	}

	@media screen and (max-width: 800px) {
		.relative-container {
			.main-title {
				font-size: 7rem;
			}
			.second-title {
				font-size: 2.5rem;
			}
		}
		.about-container {
			font-size: 2.5rem;
		}
		.projects-container {
			.projects-text-container {
				.projects-text-title {
					font-size: 2.5rem;
				}
				.projects-text-desc {
					font-size: 1.5rem;
				}
			}
			.projects-image-container {
				width: 20rem;
				height: 30rem;
			}
		}
	}

	@media screen and (max-width: 650px) {
		.relative-container {
			.main-title {
				font-size: 5rem;
			}
			.second-title {
				font-size: 3rem;
				top: 75%;
			}
		}
		.about-container {
			font-size: 2rem;
		}
		.projects-container {
			margin-top: 2rem;
			.projects-text-container {
				.projects-text-title {
					font-size: 1.8rem;
				}
				.projects-text-desc {
					font-size: 1.3rem;
				}
			}
			.projects-image-container {
				width: 15rem;
				height: 20rem;
				.btn {
					font-size: 2rem;
				}
			}
		}
		.contact-container {
			font-size: 1.6rem;
		}
	}

	@media screen and (max-width: 500px) {
		margin: 15rem auto;
		width: 90%;
		.relative-container {
			.main-title {
				font-size: 3.2rem;
			}
			.second-title {
				font-size: 2rem;
			}
		}
		.about-container {
			width: 90%;
		}
	}
`;
