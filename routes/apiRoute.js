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

    app.post("/api/newNonProfit", (req, res) => {
        db.NonProfit.create({
            userName: req.body.userName,
            website: req.body.website,
            nonProfitName: req.body.nonProfitName,
            password: req.body.password,
            proof: req.body.proof,
            logoLink: req.body.logoLink,
            hqAddress: req.body.hqAddress,
            email: req.body.email,
            phone: req.body.phone
        })
        .then(dbNonProfit => {
            res.json(dbNonProfit)
            req.session.dbNonProfit = dbNonProfit.dataValues;
            console.log("new NonProfit sign up: " + req.session.dbNonProfit.userName)
        })
    });

    

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

    app.route("/api/nonProfitLogin")
        .post((req, res) => {
            let userName = req.body.userName,
                password = req.body.password;
        db.NonProfit.findOne({ where: { userName: userName && password} }).then(function (user) {
            if (!user) {
                console.log("this is user ", user);
            }  else {
                req.session.user = user.dataValues;
                res.redirect('/api/nonProfitSession');
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

    app.get('/api/nonProfitSession', (req, res) => {
        if (req.session.user && req.cookies.user_sid) {
            loggedin = true; 
            userName = req.session.user.userName;  
            console.log("hey over here " + req.session.user.userName); 
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

    app.get("/api/allNonProfits/", (req, res) => {
        db.NonProfit.findAll({})
            .then((dbNonProfit)=> {
                res.json(dbNonProfit)
            });
    });

    app.get("/api/selectedNonProfit/:id", function(req, res) {
        db.NonProfit.findOne({
          where: {
            id: req.params.id
          }
        })
          .then(function(dbNonProfit) {
            res.json(dbNonProfit);
          });
      });
};