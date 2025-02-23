const express = require("express")
const app = express();
const PORT = 3000;


const fastCars = [
    { name: "Bugatti Chiron", speed: 304, horsepower: 1500 },
    { name: "Koenigsegg Jesko", speed: 300, horsepower: 1600 },
    { name: "Hennessey Venom F5", speed: 301, horsepower: 1817 },
    { name: "McLaren Speedtail", speed: 250, horsepower: 1036 },
    { name: "Lamborghini Aventador SVJ", speed: 217, horsepower: 759 }
];

const popularCars = [
    { name: "Toyota Corolla", speed: 112, horsepower: 139 },
    { name: "Honda Civic", speed: 124, horsepower: 158 },
    { name: "Ford Focus", speed: 120, horsepower: 160 },
    { name: "Volkswagen Golf", speed: 130, horsepower: 147 },
    { name: "Tesla Model 3", speed: 162, horsepower: 283 }
];

const trucks = [
    { name: "Ford F-150", towingCapacity: 13000, horsepower: 400 },
    { name: "Chevrolet Silverado 1500", towingCapacity: 13300, horsepower: 420 },
    { name: "Ram 1500", towingCapacity: 12750, horsepower: 395 },
    { name: "GMC Sierra 1500", towingCapacity: 13200, horsepower: 420 },
    { name: "Toyota Tundra", towingCapacity: 12000, horsepower: 381 }
];

app.get("/", (req, res, next) => {
    console.log(req.method, req.hostname, req.url);
    res.send(`
        <h1>Welcome to our website.</h1>
        <a href="/popularcars"> Popular cars </a>
        <a href="/fastcars"> Fast cars </a>
        <a href="/trucks"> Trucks </a>
        `)
})

app.get("/popularcars", (req, res) => {
    res.send(`
        <div>
            ${popularCars.name} : towing capacity of ${popularCars.towingCapacity}, horsepower of ${popularCars.horsepower}.
        </div>
        `)
})

app.get("*", (req, res) => {
    res.send("Page not found - 404")
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})