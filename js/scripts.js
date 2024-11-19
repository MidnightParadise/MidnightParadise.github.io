function templateCall(id){
    document.addEventListener("DOMContentLoaded",function(){
        const url="https://midnightparadise.github.io/templates.html"
    
        fetch(url)
        .then(response => response.text())
        .then(data => {document.getElementById(id).innerHTML=data;})
})
};
//No semicolon to end the block from initial function

    //const type = "header";
   // const id = "h1";





//Can start new function below
