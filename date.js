module.exports=damn;
function damn(){
    var today = new Date();
var objects={
    weekday:'long',   
    year:'numeric',   
    month:'long',
    day:'numeric',
}
var day=today.toLocaleDateString("en-IN",objects);
return day;
} 
