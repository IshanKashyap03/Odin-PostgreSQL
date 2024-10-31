const express = require("express");
const path = require("node:path");
app = express();
const usersRouter = require("./routes/userRoutes")
const PORT = 3000;


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use('/', usersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
