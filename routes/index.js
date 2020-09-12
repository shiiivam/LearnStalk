const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

router.get("/", (req, res) => res.render("home"));

router.get("/login", forwardAuthenticated, (req, res) => res.render("login"));

router.get("/dashboard", ensureAuthenticated, (req, res) =>
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("dashboard", {
        blogs: result,

        title: "Dashboard",

        user: req.user,
      });
    })
    .catch((err) => {
      console.log(err);
    })
);

router.get("/:id", ensureAuthenticated, (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blogDetails", {
        user: req.user,
        blog: result,
        title: "Blog Details",
      });
    })
    .catch((err) => {
      console.log(err);
      res.render("dashboard", { title: "Blog not found", user: req.user });
    });
});
router.delete("/:id", ensureAuthenticated, (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/dashboard" });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/attendance", ensureAuthenticated, (req, res) =>
  res.render("attendance", {
    user: req.user,
    title: "Attendance",
  })
);

module.exports = router;
