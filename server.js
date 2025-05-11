const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas 연결 성공"))
  .catch(err => console.error("❌ MongoDB 연결 실패", err));

app.get("/", (req, res) => {
  res.send("서버 작동 중!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 서버 실행 중: http://localhost:${PORT}`));
