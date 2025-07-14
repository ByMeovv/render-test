// src/index.ts
import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello from Render minimal server!");
});

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
