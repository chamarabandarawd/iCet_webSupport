const para=$("#para");
const btn=$(".btn");
const txt=$("#location");
const temp=$("#temp");

let lati=null;
let longi=null;

navigator.geolocation.getCurrentPosition((potition)=>{
    console.log(potition);
  lati=potition.coords.latitude;
  longi=potition.coords.longitude;
})

btn.click(function(){
    console.log("btn clicked");
    let location=txt.val();
    fetch(
        `http://api.weatherapi.com/v1/current.json?key=0deab009cb7a417381c155910231405&q=${lati},${longi}`,
        {
            method:"GET",
            mode:"cors"
        }
    ).then(
        (res)=>{
          return  res.json();
        }
    ).then((data)=>{
        console.log(data);
        para.text(data.location.name);
       temp.text(data.current.temp_c);
    })

});

// $.ajax({
//     url:`http://api.weatherapi.com/v1/current.json?key=0deab009cb7a417381c155910231405&q=${location}`,
//     method:"GET",
//     success:function (res){
//       console.log(res);
//       para.text(res.location.name);
//       temp.text(res.current.temp_c);
//     },
//     error:function(er){
//     }
//   });