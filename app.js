const express=require("express");

const ejs=require("ejs");

const app=express();

const mymodule=require("./external.js");
const homeDes=mymodule.home();

app.use(express.static("public"))

app.set('view engine', 'ejs');


app.get("/",function(req,res){

    res.render("home",({homeDes:homeDes}));


});

app.get("/contact",function(req,res){

    res.render("contact")
});
app.get("/about",function(req,res){
    res.render("about")
})

app.get("/new-case",function(req,res){
    res.render("new-case")
})
app.get("/cancel",function(req,res){
    res.redirect("/contact")
})
app.post("/new-case-submit",function(req,res){
    res.send("<h1>Submit successfully</h1>")
});
/*
app.get("/give-comment",function(req,res) {
   
    res.redirect("/")
    
})*/
app.listen(3000,function(){
    console.log("server running on port 3000");
})