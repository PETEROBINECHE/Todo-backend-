import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import router from "./routes/apirouter";
const app = express();
const PORT = process.env.PORT || 6161;

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/auth", router);

app.listen(PORT, () => {
  console.log(`this is for working sever of todo ${PORT}`);
});
