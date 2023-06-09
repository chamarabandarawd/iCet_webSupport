const para=$("#para");
const btn=$(".btn");
const txt=$("#location");
const temp=$("#temp");

btn.click(function(){
    console.log("btn clicked");
    let location=txt.val();
    $.ajax({
      url:`http://api.weatherapi.com/v1/current.json?key=0deab009cb7a417381c155910231405&q=${location}`,
      method:"GET",
      success:function (res){
        console.log(res);
        para.text(res.location.name);
        temp.text(res.current.temp_c);
      },
      error:function(er){
      }
    });
});
