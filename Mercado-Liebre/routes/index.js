var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/index", function(req, res)
{
  res.render("index");
})

router.post("/index", function(req, res)
{
  res.render("index");
})

router.get("/login", function(req, res)
{
  res.render("login");
})

router.get("/register", function(req, res)
{
  res.render("register");
})

module.exports = router;
