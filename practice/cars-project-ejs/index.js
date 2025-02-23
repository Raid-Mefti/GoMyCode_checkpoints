const express = require("express");

const app = express();
const PORT = 4545;

app.set("view engine", "ejs");

app.use("/public", express.static("./public"));

const brands = [
	{ image: "/public/images/ford.svg", title: "Ford" },
	{ image: "/public/images/Tesla.svg", title: "Tesla" },
	{ image: "/public/images/Toyota.svg", title: "Toyota" },
	{ image: "/public/images/ford.svg", title: "Ford" },
	{ image: "/public/images/Tesla.svg", title: "Tesla" },
	{ image: "/public/images/Toyota.svg", title: "Toyota" },
	{ image: "/public/images/ford.svg", title: "Ford" },
	{ image: "/public/images/Tesla.svg", title: "Tesla" },
	{ image: "/public/images/Toyota.svg", title: "Toyota" },
	{ image: "/public/images/ford.svg", title: "Ford" },
	{ image: "/public/images/Tesla.svg", title: "Tesla" },
	{ image: "/public/images/Toyota.svg", title: "Toyota" },
];
const bodyTypes = [
	{ image: "/public/images/crossover.svg", title: "Crossover" },
	{ image: "/public/images/suv.svg", title: "SUV" },
	{ image: "/public/images/wagon.svg", title: "Wagon" },
	{ image: "/public/images/crossover.svg", title: "Crossover" },
	{ image: "/public/images/suv.svg", title: "SUV" },
	{ image: "/public/images/wagon.svg", title: "Wagon" },
	{ image: "/public/images/crossover.svg", title: "Crossover" },
	{ image: "/public/images/suv.svg", title: "SUV" },
	{ image: "/public/images/wagon.svg", title: "Wagon" },
	{ image: "/public/images/crossover.svg", title: "Crossover" },
	{ image: "/public/images/suv.svg", title: "SUV" },
	{ image: "/public/images/wagon.svg", title: "Wagon" },
];
const carCards = [
	{ image: "/public/images/audiA8L2022.jpg", title: "Audi A8 L 2022", price:"78.90", kilometrage:"4000", type:"auto", persons:"4", engine:"Electric" },
	{ image: "/public/images/NissanMaximaPlatinum2022.jpg", title: "Nissan Maxima Platinum 2022", price:"78.90", kilometrage:"4000", type:"auto", persons:"4", engine:"Electric" },
	{ image: "/public/images/PorscheCayenneGTS2022.jpg", title: "Porsche Cayenne GTS 2022", price:"78.90", kilometrage:"4000", type:"auto", persons:"4", engine:"Electric" },
	{ image: "/public/images/audiA8L2022.jpg", title: "Audi A8 L 2022", price:"78.90", kilometrage:"4000", type:"auto", persons:"4", engine:"Electric" },
	{ image: "/public/images/NissanMaximaPlatinum2022.jpg", title: "Nissan Maxima Platinum 2022", price:"78.90", kilometrage:"4000", type:"auto", persons:"4", engine:"Electric" },
	{ image: "/public/images/PorscheCayenneGTS2022.jpg", title: "Porsche Cayenne GTS 2022", price:"78.90", kilometrage:"4000", type:"auto", persons:"4", engine:"Electric" },

]

app.get("/", (req, res) => {
	res.locals.brands = brands;
	res.locals.bodyTypes = bodyTypes;
	res.locals.carCards = carCards;
	res.render("home");
});
app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`);
	console.log(`http://localhost:${PORT}`);
});
