require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const userRouter = require("./routes/userRouter");
const FileStore = require("session-file-store")(session);
const lkRouter = require("./routes/lkRouter");


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(
  session({
    name: "sid",
    secret: process.env.SESSION_SECRET ?? "test",
    resave: true,
    store: new FileStore(),
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    },
  })
);

app.use("/api/user", userRouter);
app.use("/api/lk", lkRouter);

app.listen(PORT, () => {
  console.log("Server start on port ", PORT);
});
