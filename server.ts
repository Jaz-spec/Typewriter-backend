import express from "express";
import dotEnv from "dotenv";
import router from "./routes/routes";

dotEnv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("basic route");
});

app.use("/api", router);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
