const express = require("express");
const cors = require("cors");
const connectDatabase = require("./src/database/db");
const userRoute = require("./src/routes/user.route");

const app = express();
const PORT = process.env.PORT || 3000;

connectDatabase();
app.use(cors());
app.use(express.json());
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
