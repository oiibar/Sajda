import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cityRoutes from "./routes/cities.routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://sajda-cli.vercel.app/"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use("/api", cityRoutes);

app.listen(5000, () => {
  console.log(`Listening on port 5000`);
});
