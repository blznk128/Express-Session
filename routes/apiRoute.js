let db = require("../models");

module.exports = (app) => {
    app.post("/api/newDonor", (req, res) => {
        db.Donor.create({
            userName: req.body.userName,
            first_Name: req.body.first_Name,
            last_Name: req.body.last_Name,
            password: req.body.password,
            email: req.body.email
        })
        .then(dbDonor => {
            res.json(dbDonor)
            req.session.dbDonor = dbDonor.dataValues;
            console.log("new donor sign up: " + req.session.dbDonor.first_Name)
        })
    });

    // app.use((req, res, next) => {
    //     if (req.cookies.user_sid && !req.session.user) {
    //         res.clearCookie('user_sid');        
    //     }
    //     next();
    // });

    app.route("/api/login")
        .post((req, res) => {
            let userName = req.body.userName,
                password = req.body.password;
        db.Donor.findOne({ where: { userName: userName && password} }).then(function (user) {
            if (!user) {
                console.log("this is user ", user);
            }  else {
                req.session.user = user.dataValues;
                res.redirect('/api/dashboard');
            }
        });
    });

    app.get('/api/dashboard', (req, res) => {
        if (req.session.user && req.cookies.user_sid) {
            loggedin = true; 
            userName = req.session.user.userName;  
            console.log("hey over here " + req.session.user.first_Name); 
         }
            res.json(req.session.user)
        
    });

    app.post('/api/logout', (req, res) => {
        if (req.session.user && req.cookies.user_sid) {
            loggedin = false; 
            res.clearCookie('user_sid');
            res.redirect('/');
        } else {
            res.redirect('/');
        }
    });
};