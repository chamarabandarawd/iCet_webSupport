const para=$("#para");
const btn=$(".btn");

btn.click(function(){
    console.log("btn clicked");
    $.ajax({
      url:"DB/db.txt",
      method:"GET"
    });
});
