const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

router.get("/", (req, res) => res.render("home"));
router.get("/register", forwardAuthenticated, (req, res) =>
  res.render("register")
);

router.get("/login", forwardAuthenticated, (req, res) => res.render("login"));

router.get("/dashboard", ensureAuthenticated, (req, res) =>
  
      res.render("dashboard", {

        title: "Dashboard",

        user: req.user,
      })
);

router.get("/attendance", ensureAuthenticated, (req, res) =>
  res.render("attendance", {
    user: req.user,
    title: "Attendance",
  })
);
router.get("/createassign", ensureAuthenticated, (req, res) =>
  res.render("createAssign", {
    user: req.user,
    title: "Create Assignment",
  })
);
router.get("/ReceivedAssign", ensureAuthenticated, (req, res) =>
  res.render("ReceivedAssign", {
    user: req.user,
    title: "Receivec Assignments",
  })
);
router.get("/scores", ensureAuthenticated, (req, res) =>
  res.render("scores", {
    user: req.user,
    title: "Scores",
  })
);
router.get("/syllaybus", ensureAuthenticated, (req, res) =>
  res.render("syllaybus", {
    user: req.user,
    title: "Syllaybus",
  })
);
router.get("/timetable", ensureAuthenticated, (req, res) =>
  res.render("timetable", {
    user: req.user,
    title: "Timetable",
  })
);
router.get("/content", ensureAuthenticated, (req, res) =>
  res.render("content", {
    user: req.user,
    title: "Learning Contentss",
  })
);
router.get("/details", ensureAuthenticated, (req, res) =>
  res.render("details", {
    user: req.user,
    title: "Personal Details",
  })
);

module.exports = router;
