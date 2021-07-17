const express = require("express");
const app = express();
const studentRoute = require("./routes/student");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/student", studentRoute);

app.listen(PORT, () => {
  console.log(`server is starting at port ${PORT}`);
});
