const express = require("express");
const router = express.Router();
const { saveResult, getScorelist } = require("../controllers/game");

router.route("/game/save").post(saveResult)

router.route("/game/leaderboard").get(getScorelist);

module.exports = router;
