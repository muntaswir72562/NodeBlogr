const express = require("express");
const mongoose  = require ("mongoose")
const blogRoutes = require('./routes/blog')

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs");
app.set("views", ["src", __dirname + "/views"]);


const dbURI = 'mongodb+srv://muntaswir:0iNW7ZISs1Qy76PS@nodeblogr.h4lja7h.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=>{
  app.listen(3000);
}).catch((err)=>{
  console.log(err)
})


 app.use(blogRoutes)

app.use((req, res) => {
  res.render("404");
});
