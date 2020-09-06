const path = require("path");

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    
    app.get("/donorLogin", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/donorLogin.html"))
    });

    app.get("/donorHomePage", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/donorHomePage.html"))
    });
};