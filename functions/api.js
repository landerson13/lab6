const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());

const projects = [
  {
    "name": "LawnLog",
    "author": "Logan",
    "language": "React Native",
    "description": "A mobile app to help homeowners manage and track their lawn care schedules."
  },
  {
    "name": "BattleShips",
    "author": "Logan",
    "language": "Java",
    "description": "A web-based version of the classic Battleship game, supporting multiplayer mode."
  },
  {
    "name": "QuickCash",
    "author": "Logan",
    "language": "Android Studio",
    "description": "A financial app for posting easy jobs for users to apply for, enabling quick and simple job opportunities."
  }
];

app.get("/projects", (req, res) => {
  try {
    res.json(projects); 
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects", error: error.message });
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

module.exports.handler = serverless(app);
