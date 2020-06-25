// window.addEventListener('load', function () {
//     alert('Hello!')
//   });




document.getElementById("img-bg").addEventListener("click",()=>{
    window.scrollTo(0,2429.60009765625);
 document.getElementsByClassName("bg-modal-2")[0].style.display = "block";
 document.querySelector('body').style.overflowY = "hidden";
 document.querySelector('body').style.overflowX = "hidden";
 document.getElementById("img-bg").style.display = "none";
});

document.querySelector('.close').addEventListener("click",()=>{

    document.getElementsByClassName("bg-modal-2")[0].style.display = "none";
    location.reload();

});
// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://weather2020-weather-v1.p.rapidapi.com/e8ecee8ff60c478f8a36280fea0524fe/39.0997,94.5783",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "weather2020-weather-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "28850fd3d6mshe78a46709e5adb5p14c96djsn43d0d0026abf"
// 	}
// }
$(document).ready(()=>{
	console.log("hello");
	// $("#").click(function(){
		// var key = '9b9fa5c94726d3343029416686d89150';
		// $.ajax({
		// 	url:'api.openweathermap.org/data/2.5/find',
		// 	datatype:'json',
		// 	type:'GET',
		// 	data:{q='Safi,MA',appid:key,units:'metric'},
		// 	success:function(data){
		// 		console.log(data);
		// 	}
		// });
	// });
});

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://weather2020-weather-v1.p.rapidapi.com/e8ecee8ff60c478f8a36280fea0524fe/39.0997,94.5783",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "weather2020-weather-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "28850fd3d6mshe78a46709e5adb5p14c96djsn43d0d0026abf"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
// fetch("https://api.openweathermap.org/data/2.5/find?q=London")
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });
// var weather = new XMLHttpRequest();
// weather.open("GET","http://api.wunderground.com/api/df3f2ab5e1db8f97/conditions/q/PA/Meadville.json",false);
// weather.send(null);

// var r = JSON.parse(weather.response);
// var dis = "Current location: "+ r.current_observation.display_location.full + "<p>";
// dis += "Current temp : "+ r.current_observation.temperature_string + "<p>";
// dis += "current wind speed: "+ r.current_observation.wind_string;
// console.log(dis);