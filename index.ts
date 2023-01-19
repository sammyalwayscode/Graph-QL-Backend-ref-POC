import express, { Application } from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import mongoose from "mongoose";
import session from "express-session";

const url: string = "mongodb://localhost/testingDBs";

mongoose.connect(url).then(() => {
  console.log("db connected");
});
const app: Application = express();
const port: number = 2244;

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: "Iam",
    name: "session",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      maxAge: 1000 * 60 * 2,
    },
  })
);

app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome Home", data: { seesion: req.session } });
});

app.get("/start", (req, res) => {
  res.json({ message: "Welcome Home start" });
});

app.listen(port, () => {
  console.log("server listening");
});
