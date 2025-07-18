import express from "express";
import router from "./routes/userRoute.mjs";
const app = express();
const port = 3000;
app.use(express.json());

app.use("/api", router);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:3000`)
);
