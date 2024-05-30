const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

dotenv.config();
app.use(express.json());
if (process.env.NODE_ENV === "local") {
	app.use(
		cors({
			origin: "http://localhost:5173",
			credentials: true,
		}),
	);
} else {
	app.use(
		cors({
			credentials: true,
		}),
	);
}

app.use("/api", require("./routes/designRoutes"));
app.use("/api", require("./routes/authRoutes"));
// if NODE_ENV is in production mode, use the dist folder from frontend
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "./frontend/dist")));
	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")),
	);
}

// create db connection with mongoose by using try / catch block

const connectDB = async () => {
	try {
		// if condition to check if the process.env.NODE_ENV is in local mode use LOCAL_DB else use MONGO_URI
		if (process.env.NODE_ENV === "local") {
			await mongoose.connect(process.env.LOCAL_DB_URI);
			console.log("LOCAL MongoDB connection SUCCESS");
		} else {
			await mongoose.connect(process.env.MONGODB_URI);
			console.log("PRODUCTION MongoDB connection SUCCESS");
		}
	} catch (error) {
		console.error("MongoDB connection FAIL");
		process.exit(1);
	}
};

connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}😎`));
