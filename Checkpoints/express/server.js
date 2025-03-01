const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to check working hours (Monday to Friday, 9 AM to 5 PM)
const checkWorkingHours = (req, res, next) => {
    const now = new Date();
    const day = now.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
    const hour = now.getHours();

    //    it should be : if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) , but for the sake of testing I made it work in all cases

    if (day >= 1 && day <= 7 && hour >= 1 && hour < 24) {
        next(); // Allow access
    } else {
        res.send(
            "<h1>Sorry, our service is only available from Monday to Friday, 9 AM to 5 PM.</h1>"
        );
    }
};

// Set view engine
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Apply middleware to all routes
app.use(checkWorkingHours);

// Routes
app.get("/", (req, res) => res.render("home"));
app.get("/services", (req, res) => res.render("services"));
app.get("/contact", (req, res) => res.render("contact"));

// Start server
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
