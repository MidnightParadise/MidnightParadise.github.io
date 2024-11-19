function templateCall(type,id){
    const url="midnightparadise.github.io/templates.html"
    
    fetch(url)
    .then(response => response.text())
    .then(data => {document.getElementById(id).innerHTML=data;})
}
//No semicolon to end the block from initial function
document.addEventListener("DOMContentLoaded",function(){
    const type = "header";
    const id = "h1";
    templateCall(type,id);
});




//Can start new function below
