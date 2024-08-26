import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 1001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req,res) =>{
    res.render("intro.ejs");
});

app.get("/home", (req,res) =>{
  res.render("home.ejs");
});

app.get("/blog", (req,res) =>{
  res.render("blog.ejs");
});

app.get("/simon", (req,res) =>{
  res.render("simon.ejs");
});

app.get("/e-commerce", (req,res) =>{
  res.render("e-commerce.ejs");
});

app.get("/certificate", (req,res) =>{
  res.render("certificate.ejs");
});

app.get("/contact", (req,res) =>{
  res.render("contact.ejs");
});

app.get("/offer", (req,res) =>{
  res.render("offer.ejs");
});

app.listen(port, () =>{
  console.log(`the server is running in ${port}`);
});
