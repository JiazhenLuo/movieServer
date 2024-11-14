import express, { json } from "express";
import fetch from "node-fetch";
import cors from "cors";
import fs from "fs";

// import movieData from './MovieData.json'
// console.log(movieData)
// import movieData from './MovieData.json'// assert { type: 'json' };

const app = express();
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("MovieData.json", "utf-8"));
  //console.log(data);
  res.json(data); // Return the JSON data directly if that's what you need
});

app.get("/MovieData", (req, res) => {
  const img = req.query.img;
  const title = req.query.title;
  const director = req.query.director;
  const screentime = req.query.screentime;
  const link = req.query.link;
  const time = req.query.time;
  const description = req.query.Description;
  res.json({ img, title, director, screentime, link, time, description });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
