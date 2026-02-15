

const express = require("express");
const cors = require("cors");
const aiRoutes = require("./routes/airoutes");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRoutes);


app.listen(3000, () => {
  console.log("Server running on port 3000");
});

