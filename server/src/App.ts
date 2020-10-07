import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server Started at Port, ${PORT}`)
});