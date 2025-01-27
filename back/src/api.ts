import express from "express";
import { Article } from "./interfaces/Article";

const app = express.Router();

export default app;

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 45 },
];

app.get("/articles", (req, res) => {
  res.json(articles);
});
