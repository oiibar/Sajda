import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cityRoutes from "./routes/cities.routes.js";

const PORT = 5000;
dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["*"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use("/api", cityRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default app;
