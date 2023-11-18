const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const usersRouter = require("./routes/user");
const productRouter = require("./routes/products");

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html");
// });Ï

app.use("/user", usersRouter);
app.use("/products", productRouter);

// app.get("/user", (req, res) => {
//     res.send("GET request for /users");
//   });
// app.get("/user", (req, res) => {
//   res.sendFile(__dirname + "/views/user.html");
// });
// app.get("/products", (req, res) =>
//   res.sendFile(__dirname + "/views/products.html")
// );

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Custom 404 page
app.use((req, res) => res.status(404).sendFile(__dirname + '/views/404.html'));


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  


app.listen(port, () => {
  console.log(`Server is running . . . .`);
});
