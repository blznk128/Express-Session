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

    app.get("/nonProfitLogin", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/nonProfitLogin.html"))
    });

    app.get("/nonProfitSignUp", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/nonProfitSignUp.html"))
    });

    app.get("/nonProfitHome", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/nonProfitHome.html"))
    });

    app.get("/selectedNonProfit", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/selectedNonProfit.html"))
    })
};