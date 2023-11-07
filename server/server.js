require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const userRouter = require("./routes/userRouter");

const authOwnerRouter = require("./routes/authOwnerRouter");
const validateRooter = require("./routes/validateRouter");

const restaurantRouter = require("./routes/restaurantRouter");
const adminRouter = require("./routes/adminRouter");
const countryRouter = require("./routes/countryRouter");

const FileStore = require("session-file-store")(session);
const lkRouter = require("./routes/lkRouter");
const  favoriteRouter  = require("./routes/favoriteApiRouter");

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

app.use("/api/authOwner", authOwnerRouter);
app.use("/api/validate", validateRooter);

app.use("/api/lk", lkRouter);

app.use("/api/restaurants", restaurantRouter);
app.use("/api/admin", adminRouter);
app.use("/api/country", countryRouter);
app.use("/api/favorite", favoriteRouter);

app.listen(PORT, () => {
  console.log("Server start on port ", PORT);
});
