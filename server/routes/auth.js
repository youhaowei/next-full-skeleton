var express = require("express");
var passport = require("../lib/passport");
var router = express.Router();

/* GET users listing. */
router.post("/login", passport.authenticate("local"), function(req, res, next) {
	res.send("respond with a resource");
});

router.get("/", function(req, res) {
	console.log(req.user);
	res.json(req.user);
});

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("/login");
});

router.get(
	"/google",
	passport.authenticate("google", {
		scope: ["https://www.googleapis.com/auth/plus.login"]
	})
);

router.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/login" }),
	function(req, res) {
		res.redirect("/");
	}
);

module.exports = router;
