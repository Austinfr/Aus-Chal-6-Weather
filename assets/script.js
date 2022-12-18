
function findLocation(location){
    var geoReq = "http://api.openweathermap.org/geo/1.0/direct?q=" + location + "&appid=9c26d768ead86b39036caf98fb0abbfa";

    fetch(geoReq).then(function(response){
        if(response.ok){
            return response.json();
        }
    }).then(function(data){
        let lat = data[0].lat;
        let lon = data[0].lon;
        getForecast(lat, lon);
    });

}

function getForecast(lat, lon){
    var forecastReq = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=9c26d768ead86b39036caf98fb0abbfa";

    fetch(forecastReq).then(function(response){
        if(response.ok){
            return response.json();
        }
    }).then(function(data){
        console.log(data);
        for(let x = 0; x < 5; x++){
            console.log(data.list[x]);
            console.log(data.list[x].weather[0]);
            console.log(data.list[x].wind.speed + " MPH");
        }
    });
}

findLocation("Seattle");