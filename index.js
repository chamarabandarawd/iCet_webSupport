const para=$("#para");
const btn=$(".btn");
const txt=$("#location");
const temp=$("#temp");

let lati=null;
let longi=null;

function runEveryMinute() {
    navigator.geolocation.getCurrentPosition((potition)=>{
        console.log(potition);
      lati=potition.coords.latitude;
      longi=potition.coords.longitude;
    })
    console.log("Function running every minute");
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
}
runEveryMinute();
setInterval(runEveryMinute, 6000);
