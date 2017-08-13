

var button =document.getElementById("counter")

var counter=0;
button.onclick =function()

{
    counter=counter+1;
    
    var span=document.getElementById("count")
    span.innerHTML= counter.toString();
    
};
//name get
var nameInput=document.getElementById("name");
var name=nameInput.value;
var submit=document.getElementById("submit_button");
submit_button.onclick =function()
{
    document.write(name);
}