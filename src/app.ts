import express from "express";
import cors from "cors";
import router from "./routers/gameNoteRouter.js";

const port = 4000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => console.log("Running on localhost:" + port));
