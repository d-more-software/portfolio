import space from "./images/SpaceProject.webp";
import stocks from "./images/StocksProject.webp";
import food from "./images/food-store.webp";

export const projects = [
	{
		title: "Space News project",
		imageSRC: space,
		url: "https://space-dream.netlify.app/apod",
		desc: "Project built with react 18, based on NASA and Datastro APIs . ",
	},
	{
		title: "Stock Dashboard project",
		imageSRC: stocks,
		url: "https://david-stocks-market.netlify.app/stocks",
		desc: "Project built with React 18 and Redux Toolkit , based on 12Data API .",
	},
	{
		title: "🛒 FreshMarket project",
		imageSRC: food,
		url: "https://freshmarket-e-commerce.netlify.app/home",
		desc: "Project built with React 19 and TypeScript,ContextAPI for cart management, and Bootstrap.",
	},
];
