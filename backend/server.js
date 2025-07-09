import express from "express";
import cors from "cors";
import { connectdb } from "./config/db.js";
import foodrouter from "./routes/foodroute.js";

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB Connection
connectdb();

// api endpoints
app.use("/api/food",foodrouter)

// Routes
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
