if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const express = require("express");
const app = express();
const path = require('path');
const bcrypt = require("bcrypt");
const passport = require("passport");
const initializePassport = require("./passport-config");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const User = require("./user");

initializePassport(passport);
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

app.post(
"/login",
checkNotAuthenticated,
passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
})
);

app.post("/register", checkNotAuthenticated, async (req, res) => {
try {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  res.redirect("/login");
} catch (error) {
  console.log(error);
  res.redirect("/register");
}
});

app.get("/index", checkAuthenticated, (req, res) => {
res.render("index.ejs", { name: req.user.name });
});

app.get("/login", checkNotAuthenticated, (req, res) => {
res.render("login.ejs");
});

app.get("/register", checkNotAuthenticated, (req, res) => {
res.render("register.ejs");
});
app.get("/about-form", (req, res) => {
res.render("index.ejs");
});
// ...existing code...



// ...existing code...

app.delete("/logout", function(req, res) {
req.logout();
res.redirect("/login");
});

const http = require('http');

// ...existing code...

// ...existing code...

function checkAuthenticated(req, res, next) {
if (req.isAuthenticated()) {
  return next();
}
res.redirect("/login");
}
// Assuming you have the necessary dependencies and server setup

// Set the views directory and template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define a route for element.ejs

app.get('/', (req, res) => {
  res.render('index', {
      title: 'Home Page',
      description: 'This is the home page description.',
      sectionItems: [
          {
              icon: '/public/assets/images/feature-1-edf4481d69166ac81917d1e40e6597c8d61aa970ad44367ce78049bf830fbda5.svg',
              title: 'Make a resume that wins interviews!',
              text: 'Use our resume maker with its advanced creation tools to tell a professional story that engages recruiters, hiring managers and even CEOs.'
          },
          {
              icon: '/public/assets/images/feature-2-a7a471bd973c02a55d1b3f8aff578cd3c9a4c5ac4fc74423d94ecc04aef3492b.svg',
              title: 'Resume writing made easy!',
              text: 'Resume writing has never been this effortless. Pre-generated text, visual designs and more - all already integrated into the resume maker. Just fill in your details.'
          },
          {
              icon: '/public/assets/images/feature-3-4e87a82f83e260488c36f8105e26f439fdc3ee5009372bb5e12d9421f32eabdd.svg',
              title: 'A recruiter-tested CV maker tool',
              text: 'Our resume builder and its pre-generated content are tested by recruiters and IT experts. We help your CV become truly competitive in the hiring process.'
          }
      ]
  });
});

function checkNotAuthenticated(req, res, next) {
if (req.isAuthenticated()) {
  return res.redirect("/");
}
next();
}

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});