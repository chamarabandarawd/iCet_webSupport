function btnClick(){
    console.log("Button clicked")
    const req=new XMLHttpRequest();
    console.log(req.readyState);
    req.open("GET","DB/data.json");
    console.log(req.readyState);
    req.send();
    console.log(req.responseText);
    req.onreadystatechange=function(){
        if(this.readyState==4){
            console.log(req.responseText)
        }
    }
}