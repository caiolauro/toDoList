const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
const today = new Date();
const options = { weekday: 'long', month: 'long', day: 'numeric' };
var newListItems = ["Buy Food", "Cook Food", "Eat Food"];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



app.get("/", function (req, res) {

    res.render("template", { kindOfDay: today.toLocaleDateString('en-US', options), newListItems: newListItems })
});

app.post("/", function (req, res) {
    var newItem = req.body.newItem;
    newListItems.push(newItem);
    res.redirect("/");

});
app.delete("/", function (req, res) {
 
})
app.listen(3000, function () { console.log("Server is running on port 3000.") });