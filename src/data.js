import space from "./images/SpaceProject.webp";
import stocks from "./images/StocksProject.webp";
import food from "./images/food-store.webp";

export const projects = [
	{
		title: "Space News project",
		imageSRC: space,
		url: "https://space-dream.netlify.app/apod",
		desc: "Project made with react 18, based on NASA and Datastro APIs . ",
	},
	{
		title: "Stock Dashboard project",
		imageSRC: stocks,
		url: "https://david-stocks-market.netlify.app/stocks",
		desc: "Project made with React 18 and Redux Toolkit , based on 12Data API .",
	},
	{
		title: "🛒 FreshMarket project",
		imageSRC: food,
		url: "https://freshmarket-e-commerce.netlify.app/home",
		desc: "FreshMarket is a modern e-commerce application built with React 19 and TypeScript, allowing users to browse and buy fresh fruits online. The main goal of the project is to implement an efficient shopping cart management system with Context API, smooth navigation via React Router, and a modern design thanks to Bootstrap.",
	},
];
