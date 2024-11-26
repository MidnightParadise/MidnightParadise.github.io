function templateCall(id){
    
        const url="https://midnightparadise.github.io/templates.html"
    
        fetch(url)

            .then(response => {
                if (!response.ok){
                throw new Error("Network response fail" + response.statusText);
                }
            return response.text();
            })
            

            .then(data => {document.getElementById(id).innerHTML=data;})
            
            .catch(error=>{console.error("Fetch failed", error);})
            
};

//No semicolon to end the block from initial function

    //const type = "header";
   // const id = "h1";





//Can start new function below
