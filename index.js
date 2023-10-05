// const express = require('express');
// const bodyParser = require('body-parser');
// const request=require('request');
// const app = express();
// var item=[];
// var i=0;
// app.use((bodyParser.urlencoded({extended:true})));
// app.set('view engine', 'ejs');   //this line means we have a folder named view having file name ejs.
// app.get("/", function(req, res){
//   var today = new Date();
//   var day="";
// if(today.getDay()===0)
// {
//     day="Sunday"; 
// }
// else if(today.getDay()===1){
//     day="Monday";
// }
// else if(today.getDay()===2){
//   day="Tuesday";
// }
// else if(today.getDay()===3){
//   day="Wednesday";
// }
// else if(today.getDay()===4){
//   day="Thursday";
// }
// else if(today.getDay()===5){
//   day="Friday";
// }
// else if(today.getDay()===6){
//   day="Saturday";
// }
// var options={
//  weekday:"long",
//  day:"numeric",
//  month:"long",
//  year:"numeric",
// }
// var day=today.toLocaleDateString("hi-IN",options)
// res.render('list',{kindofday:day,newitems:item});
//   //it will give today's date
// });
// app.post("/",function(req,res){
//    item[i]=req.body.newitem1; //but before this initiate the body Parser
//      i++;
//   res.redirect("/");
// });
// app.listen(3000, function(){
// console.log("Server started on port 3000.");
// });
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request=require('request');
const app = express();

// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://12p1aryan:Homecoming@cluster0.ycycps2.mongodb.net/To_Do_list_data?retryWrites=true&w=majority";
mongoose.connect(uri,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true,
  useFindAndModify:false,
}).then(() =>{
  console.log("Successful");
}
).catch((err) => console.log("sorry"));

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });


// run().catch(console.dir);

let date=require(__dirname+"/date.js");
var items=[];
var i=0;
app.use((bodyParser.urlencoded({extended:true})));
app.use(express.static("public")); //to make dynamic files use css
app.set('view engine', 'ejs');
// mongoose.connect("mongodb://localhost:27017/toDolistDB",{useNewUrlParser:true});
// const itemsSchema = {
// name:String
// }
// const Item =mongoose.model("Item",itemsSchema);
// const item1 = new item({
// name: "Welcome"
// })
// const defaultItmes=[item1];
// Item.insertMany(defaultItmes,function(err){
//    if(err)
//    console.log(err);
//    else{
//       console.log("Success");
//    }
// })
app.get("/", function(req, res){
 
let day=date();
 res.render('list',{kindofday:day,newitems:items});
});
app.post("/",function(req,res){
   items[i]=req.body.newitem;
   i++;
   res.redirect("/");
});
app.listen(3000, function(){
console.log("Server started on port 3000.");
});



















