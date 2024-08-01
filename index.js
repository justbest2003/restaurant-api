const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const restaurantRouter = require("./routers/restaurant.router");
const authRouter = require("./routers/auth.router");
const db = require("./models/"); //index
const role = db.Role;
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
};

//Dev Mode
/*db.sequelize.sync({ force: true }).then(() => {
  initRole();
  console.log("Drop and Sync Database");
})*/

const initRole = () => {
  role.create({ id: 1, name: "user" });
  role.create({ id: 2, name: "moderator" });
  role.create({ id: 3, name: "admin" });
};

//use Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//use Router
app.use("/api/v1/restaurants", restaurantRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello Restaurant API</h1>");
});

app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});

//http://localhost:5000/api/v1/auth/signin
//http://localhost:5000/api/v1/auth/signup
//http://localhost:5000/api/v1/restaurants
