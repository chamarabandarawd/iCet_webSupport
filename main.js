const para= document.getElementById("para");
function btnClick(){
    console.log("Button clicked")
    const req=new XMLHttpRequest();
    console.log(req.readyState);
    req.open("GET","DB/db.txt");
    console.log(req.readyState);
    req.send();
    console.log(req.responseText);
    req.onreadystatechange=function(){
        console.log(req.status);
        if(this.readyState==4 && req.status==200){
            console.log(req.responseText);
            para.innerText=req.responseText;
        }else{
            alert("Error in backend")
        }
    }
  
}

