//I copied a list of the 1000 us largest cities in the united states from this repo https://gist.github.com/Miserlou/11500b2345d3fe850c92
//Thank you for whoever made the list
//The real code starts on line 1008

var cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "Phoenix",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Indianapolis",
    "Jacksonville",
    "San Francisco",
    "Columbus",
    "Charlotte",
    "Fort Worth",
    "Detroit",
    "El Paso",
    "Memphis",
    "Seattle",
    "Denver",
    "Washington",
    "Boston",
    "Nashville-Davidson",
    "Baltimore",
    "Oklahoma City",
    "Louisville/Jefferson County",
    "Portland",
    "Las Vegas",
    "Milwaukee",
    "Albuquerque",
    "Tucson",
    "Fresno",
    "Sacramento",
    "Long Beach",
    "Kansas City",
    "Mesa",
    "Virginia Beach",
    "Atlanta",
    "Colorado Springs",
    "Omaha",
    "Raleigh",
    "Miami",
    "Oakland",
    "Minneapolis",
    "Tulsa",
    "Cleveland",
    "Wichita",
    "Arlington",
    "New Orleans",
    "Bakersfield",
    "Tampa",
    "Honolulu",
    "Aurora",
    "Anaheim",
    "Santa Ana",
    "St. Louis",
    "Riverside",
    "Corpus Christi",
    "Lexington-Fayette",
    "Pittsburgh",
    "Anchorage",
    "Stockton",
    "Cincinnati",
    "St. Paul",
    "Toledo",
    "Greensboro",
    "Newark",
    "Plano",
    "Henderson",
    "Lincoln",
    "Buffalo",
    "Jersey City",
    "Chula Vista",
    "Fort Wayne",
    "Orlando",
    "St. Petersburg",
    "Chandler",
    "Laredo",
    "Norfolk",
    "Durham",
    "Madison",
    "Lubbock",
    "Irvine",
    "Winston-Salem",
    "Glendale",
    "Garland",
    "Hialeah",
    "Reno",
    "Chesapeake",
    "Gilbert",
    "Baton Rouge",
    "Irving",
    "Scottsdale",
    "North Las Vegas",
    "Fremont",
    "Boise City",
    "Richmond",
    "San Bernardino",
    "Birmingham",
    "Spokane",
    "Rochester",
    "Des Moines",
    "Modesto",
    "Fayetteville",
    "Tacoma",
    "Oxnard",
    "Fontana",
    "Columbus",
    "Montgomery",
    "Moreno Valley",
    "Shreveport",
    "Aurora",
    "Yonkers",
    "Akron",
    "Huntington Beach",
    "Little Rock",
    "Augusta-Richmond County",
    "Amarillo",
    "Glendale",
    "Mobile",
    "Grand Rapids",
    "Salt Lake City",
    "Tallahassee",
    "Huntsville",
    "Grand Prairie",
    "Knoxville",
    "Worcester",
    "Newport News",
    "Brownsville",
    "Overland Park",
    "Santa Clarita",
    "Providence",
    "Garden Grove",
    "Chattanooga",
    "Oceanside",
    "Jackson",
    "Fort Lauderdale",
    "Santa Rosa",
    "Rancho Cucamonga",
    "Port St. Lucie",
    "Tempe",
    "Ontario",
    "Vancouver",
    "Cape Coral",
    "Sioux Falls",
    "Springfield",
    "Peoria",
    "Pembroke Pines",
    "Elk Grove",
    "Salem",
    "Lancaster",
    "Corona",
    "Eugene",
    "Palmdale",
    "Salinas",
    "Springfield",
    "Pasadena",
    "Fort Collins",
    "Hayward",
    "Pomona",
    "Cary",
    "Rockford",
    "Alexandria",
    "Escondido",
    "McKinney",
    "Kansas City",
    "Joliet",
    "Sunnyvale",
    "Torrance",
    "Bridgeport",
    "Lakewood",
    "Hollywood",
    "Paterson",
    "Naperville",
    "Syracuse",
    "Mesquite",
    "Dayton",
    "Savannah",
    "Clarksville",
    "Orange",
    "Pasadena",
    "Fullerton",
    "Killeen",
    "Frisco",
    "Hampton",
    "McAllen",
    "Warren",
    "Bellevue",
    "West Valley City",
    "Columbia",
    "Olathe",
    "Sterling Heights",
    "New Haven",
    "Miramar",
    "Waco",
    "Thousand Oaks",
    "Cedar Rapids",
    "Charleston",
    "Visalia",
    "Topeka",
    "Elizabeth",
    "Gainesville",
    "Thornton",
    "Roseville",
    "Carrollton",
    "Coral Springs",
    "Stamford",
    "Simi Valley",
    "Concord",
    "Hartford",
    "Kent",
    "Lafayette",
    "Midland",
    "Surprise",
    "Denton",
    "Victorville",
    "Evansville",
    "Santa Clara",
    "Abilene",
    "Athens-Clarke County",
    "Vallejo",
    "Allentown",
    "Norman",
    "Beaumont",
    "Independence",
    "Murfreesboro",
    "Ann Arbor",
    "Springfield",
    "Berkeley",
    "Peoria",
    "Provo",
    "El Monte",
    "Columbia",
    "Lansing",
    "Fargo",
    "Downey",
    "Costa Mesa",
    "Wilmington",
    "Arvada",
    "Inglewood",
    "Miami Gardens",
    "Carlsbad",
    "Westminster",
    "Rochester",
    "Odessa",
    "Manchester",
    "Elgin",
    "West Jordan",
    "Round Rock",
    "Clearwater",
    "Waterbury",
    "Gresham",
    "Fairfield",
    "Billings",
    "Lowell",
    "San Buenaventura (Ventura)",
    "Pueblo",
    "High Point",
    "West Covina",
    "Richmond",
    "Murrieta",
    "Cambridge",
    "Antioch",
    "Temecula",
    "Norwalk",
    "Centennial",
    "Everett",
    "Palm Bay",
    "Wichita Falls",
    "Green Bay",
    "Daly City",
    "Burbank",
    "Richardson",
    "Pompano Beach",
    "North Charleston",
    "Broken Arrow",
    "Boulder",
    "West Palm Beach",
    "Santa Maria",
    "El Cajon",
    "Davenport",
    "Rialto",
    "Las Cruces",
    "San Mateo",
    "Lewisville",
    "South Bend",
    "Lakeland",
    "Erie",
    "Tyler",
    "Pearland",
    "College Station",
    "Kenosha",
    "Sandy Springs",
    "Clovis",
    "Flint",
    "Roanoke",
    "Albany",
    "Jurupa Valley",
    "Compton",
    "San Angelo",
    "Hillsboro",
    "Lawton",
    "Renton",
    "Vista",
    "Davie",
    "Greeley",
    "Mission Viejo",
    "Portsmouth",
    "Dearborn",
    "South Gate",
    "Tuscaloosa",
    "Livonia",
    "New Bedford",
    "Vacaville",
    "Brockton",
    "Roswell",
    "Beaverton",
    "Quincy",
    "Sparks",
    "Yakima",
    "Lee's Summit",
    "Federal Way",
    "Carson",
    "Santa Monica",
    "Hesperia",
    "Allen",
    "Rio Rancho",
    "Yuma",
    "Westminster",
    "Orem",
    "Lynn",
    "Redding",
    "Spokane Valley",
    "Miami Beach",
    "League City",
    "Lawrence",
    "Santa Barbara",
    "Plantation",
    "Sandy",
    "Sunrise",
    "Macon",
    "Longmont",
    "Boca Raton",
    "San Marcos",
    "Greenville",
    "Waukegan",
    "Fall River",
    "Chico",
    "Newton",
    "San Leandro",
    "Reading",
    "Norwalk",
    "Fort Smith",
    "Newport Beach",
    "Asheville",
    "Nashua",
    "Edmond",
    "Whittier",
    "Nampa",
    "Bloomington",
    "Deltona",
    "Hawthorne",
    "Duluth",
    "Carmel",
    "Suffolk",
    "Clifton",
    "Citrus Heights",
    "Livermore",
    "Tracy",
    "Alhambra",
    "Kirkland",
    "Trenton",
    "Ogden",
    "Hoover",
    "Cicero",
    "Fishers",
    "Sugar Land",
    "Danbury",
    "Meridian",
    "Indio",
    "Concord",
    "Menifee",
    "Champaign",
    "Buena Park",
    "Troy",
    "O'Fallon",
    "Johns Creek",
    "Bellingham",
    "Westland",
    "Bloomington",
    "Sioux City",
    "Warwick",
    "Hemet",
    "Longview",
    "Farmington Hills",
    "Bend",
    "Lakewood",
    "Merced",
    "Mission",
    "Chino",
    "Redwood City",
    "Edinburg",
    "Cranston",
    "Parma",
    "New Rochelle",
    "Lake Forest",
    "Napa",
    "Hammond",
    "Fayetteville",
    "Bloomington",
    "Avondale",
    "Somerville",
    "Palm Coast",
    "Bryan",
    "Gary",
    "Largo",
    "Brooklyn Park",
    "Tustin",
    "Racine",
    "Deerfield Beach",
    "Lynchburg",
    "Mountain View",
    "Medford",
    "Lawrence",
    "Bellflower",
    "Melbourne",
    "St. Joseph",
    "Camden",
    "St. George",
    "Kennewick",
    "Baldwin Park",
    "Chino Hills",
    "Alameda",
    "Albany",
    "Arlington Heights",
    "Scranton",
    "Evanston",
    "Kalamazoo",
    "Baytown",
    "Upland",
    "Springdale",
    "Bethlehem",
    "Schaumburg",
    "Mount Pleasant",
    "Auburn",
    "Decatur",
    "San Ramon",
    "Pleasanton",
    "Wyoming",
    "Lake Charles",
    "Plymouth",
    "Bolingbrook",
    "Pharr",
    "Appleton",
    "Gastonia",
    "Folsom",
    "Southfield",
    "Rochester Hills",
    "New Britain",
    "Goodyear",
    "Canton",
    "Warner Robins",
    "Union City",
    "Perris",
    "Manteca",
    "Iowa City",
    "Jonesboro",
    "Wilmington",
    "Lynwood",
    "Loveland",
    "Pawtucket",
    "Boynton Beach",
    "Waukesha",
    "Gulfport",
    "Apple Valley",
    "Passaic",
    "Rapid City",
    "Layton",
    "Lafayette",
    "Turlock",
    "Muncie",
    "Temple",
    "Missouri City",
    "Redlands",
    "Santa Fe",
    "Lauderhill",
    "Milpitas",
    "Palatine",
    "Missoula",
    "Rock Hill",
    "Jacksonville",
    "Franklin",
    "Flagstaff",
    "Flower Mound",
    "Weston",
    "Waterloo",
    "Union City",
    "Mount Vernon",
    "Fort Myers",
    "Dothan",
    "Rancho Cordova",
    "Redondo Beach",
    "Jackson",
    "Pasco",
    "St. Charles",
    "Eau Claire",
    "North Richland Hills",
    "Bismarck",
    "Yorba Linda",
    "Kenner",
    "Walnut Creek",
    "Frederick",
    "Oshkosh",
    "Pittsburg",
    "Palo Alto",
    "Bossier City",
    "Portland",
    "St. Cloud",
    "Davis",
    "South San Francisco",
    "Camarillo",
    "North Little Rock",
    "Schenectady",
    "Gaithersburg",
    "Harlingen",
    "Woodbury",
    "Eagan",
    "Yuba City",
    "Maple Grove",
    "Youngstown",
    "Skokie",
    "Kissimmee",
    "Johnson City",
    "Victoria",
    "San Clemente",
    "Bayonne",
    "Laguna Niguel",
    "East Orange",
    "Shawnee",
    "Homestead",
    "Rockville",
    "Delray Beach",
    "Janesville",
    "Conway",
    "Pico Rivera",
    "Lorain",
    "Montebello",
    "Lodi",
    "New Braunfels",
    "Marysville",
    "Tamarac",
    "Madera",
    "Conroe",
    "Santa Cruz",
    "Eden Prairie",
    "Cheyenne",
    "Daytona Beach",
    "Alpharetta",
    "Hamilton",
    "Waltham",
    "Coon Rapids",
    "Haverhill",
    "Council Bluffs",
    "Taylor",
    "Utica",
    "Ames",
    "La Habra",
    "Encinitas",
    "Bowling Green",
    "Burnsville",
    "Greenville",
    "West Des Moines",
    "Cedar Park",
    "Tulare",
    "Monterey Park",
    "Vineland",
    "Terre Haute",
    "North Miami",
    "Mansfield",
    "West Allis",
    "Bristol",
    "Taylorsville",
    "Malden",
    "Meriden",
    "Blaine",
    "Wellington",
    "Cupertino",
    "Springfield",
    "Rogers",
    "St. Clair Shores",
    "Gardena",
    "Pontiac",
    "National City",
    "Grand Junction",
    "Rocklin",
    "Chapel Hill",
    "Casper",
    "Broomfield",
    "Petaluma",
    "South Jordan",
    "Springfield",
    "Great Falls",
    "Lancaster",
    "North Port",
    "Lakewood",
    "Marietta",
    "San Rafael",
    "Royal Oak",
    "Des Plaines",
    "Huntington Park",
    "La Mesa",
    "Orland Park",
    "Auburn",
    "Lakeville",
    "Owensboro",
    "Moore",
    "Jupiter",
    "Idaho Falls",
    "Dubuque",
    "Bartlett",
    "Rowlett",
    "Novi",
    "White Plains",
    "Arcadia",
    "Redmond",
    "Lake Elsinore",
    "Ocala",
    "Tinley Park",
    "Port Orange",
    "Medford",
    "Oak Lawn",
    "Rocky Mount",
    "Kokomo",
    "Coconut Creek",
    "Bowie",
    "Berwyn",
    "Midwest City",
    "Fountain Valley",
    "Buckeye",
    "Dearborn Heights",
    "Woodland",
    "Noblesville",
    "Valdosta",
    "Diamond Bar",
    "Manhattan",
    "Santee",
    "Taunton",
    "Sanford",
    "Kettering",
    "New Brunswick",
    "Decatur",
    "Chicopee",
    "Anderson",
    "Margate",
    "Weymouth Town",
    "Hempstead",
    "Corvallis",
    "Eastvale",
    "Porterville",
    "West Haven",
    "Brentwood",
    "Paramount",
    "Grand Forks",
    "Georgetown",
    "St. Peters",
    "Shoreline",
    "Mount Prospect",
    "Hanford",
    "Normal",
    "Rosemead",
    "Lehi",
    "Pocatello",
    "Highland",
    "Novato",
    "Port Arthur",
    "Carson City",
    "San Marcos",
    "Hendersonville",
    "Elyria",
    "Revere",
    "Pflugerville",
    "Greenwood",
    "Bellevue",
    "Wheaton",
    "Smyrna",
    "Sarasota",
    "Blue Springs",
    "Colton",
    "Euless",
    "Castle Rock",
    "Cathedral City",
    "Kingsport",
    "Lake Havasu City",
    "Pensacola",
    "Hoboken",
    "Yucaipa",
    "Watsonville",
    "Richland",
    "Delano",
    "Hoffman Estates",
    "Florissant",
    "Placentia",
    "West New York",
    "Dublin",
    "Oak Park",
    "Peabody",
    "Perth Amboy",
    "Battle Creek",
    "Bradenton",
    "Gilroy",
    "Milford",
    "Albany",
    "Ankeny",
    "La Crosse",
    "Burlington",
    "DeSoto",
    "Harrisonburg",
    "Minnetonka",
    "Elkhart",
    "Lakewood",
    "Glendora",
    "Southaven",
    "Charleston",
    "Joplin",
    "Enid",
    "Palm Beach Gardens",
    "Brookhaven",
    "Plainfield",
    "Grand Island",
    "Palm Desert",
    "Huntersville",
    "Tigard",
    "Lenexa",
    "Saginaw",
    "Kentwood",
    "Doral",
    "Apple Valley",
    "Grapevine",
    "Aliso Viejo",
    "Sammamish",
    "Casa Grande",
    "Pinellas Park",
    "Troy",
    "West Sacramento",
    "Burien",
    "Commerce City",
    "Monroe",
    "Cerritos",
    "Downers Grove",
    "Coral Gables",
    "Wilson",
    "Niagara Falls",
    "Poway",
    "Edina",
    "Cuyahoga Falls",
    "Rancho Santa Margarita",
    "Harrisburg",
    "Huntington",
    "La Mirada",
    "Cypress",
    "Caldwell",
    "Logan",
    "Galveston",
    "Sheboygan",
    "Middletown",
    "Murray",
    "Roswell",
    "Parker",
    "Bedford",
    "East Lansing",
    "Methuen",
    "Covina",
    "Alexandria",
    "Olympia",
    "Euclid",
    "Mishawaka",
    "Salina",
    "Azusa",
    "Newark",
    "Chesterfield",
    "Leesburg",
    "Dunwoody",
    "Hattiesburg",
    "Roseville",
    "Bonita Springs",
    "Portage",
    "St. Louis Park",
    "Collierville",
    "Middletown",
    "Stillwater",
    "East Providence",
    "Lawrence",
    "Wauwatosa",
    "Mentor",
    "Ceres",
    "Cedar Hill",
    "Mansfield",
    "Binghamton",
    "Coeur d'Alene",
    "San Luis Obispo",
    "Minot",
    "Palm Springs",
    "Pine Bluff",
    "Texas City",
    "Summerville",
    "Twin Falls",
    "Jeffersonville",
    "San Jacinto",
    "Madison",
    "Altoona",
    "Columbus",
    "Beavercreek",
    "Apopka",
    "Elmhurst",
    "Maricopa",
    "Farmington",
    "Glenview",
    "Cleveland Heights",
    "Draper",
    "Lincoln",
    "Sierra Vista",
    "Lacey",
    "Biloxi",
    "Strongsville",
    "Barnstable Town",
    "Wylie",
    "Sayreville",
    "Kannapolis",
    "Charlottesville",
    "Littleton",
    "Titusville",
    "Hackensack",
    "Newark",
    "Pittsfield",
    "York",
    "Lombard",
    "Attleboro",
    "DeKalb",
    "Blacksburg",
    "Dublin",
    "Haltom City",
    "Lompoc",
    "El Centro",
    "Danville",
    "Jefferson City",
    "Cutler Bay",
    "Oakland Park",
    "North Miami Beach",
    "Freeport",
    "Moline",
    "Coachella",
    "Fort Pierce",
    "Smyrna",
    "Bountiful",
    "Fond du Lac",
    "Everett",
    "Danville",
    "Keller",
    "Belleville",
    "Bell Gardens",
    "Cleveland",
    "North Lauderdale",
    "Fairfield",
    "Salem",
    "Rancho Palos Verdes",
    "San Bruno",
    "Concord",
    "Burlington",
    "Apex",
    "Midland",
    "Altamonte Springs",
    "Hutchinson",
    "Buffalo Grove",
    "Urbandale",
    "State College",
    "Urbana",
    "Plainfield",
    "Manassas",
    "Bartlett",
    "Kearny",
    "Oro Valley",
    "Findlay",
    "Rohnert Park",
    "Westfield",
    "Linden",
    "Sumter",
    "Wilkes-Barre",
    "Woonsocket",
    "Leominster",
    "Shelton",
    "Brea",
    "Covington",
    "Rockwall",
    "Meridian",
    "Riverton",
    "St. Cloud",
    "Quincy",
    "Morgan Hill",
    "Warren",
    "Edmonds",
    "Burleson",
    "Beverly",
    "Mankato",
    "Hagerstown",
    "Prescott",
    "Campbell",
    "Cedar Falls",
    "Beaumont",
    "La Puente",
    "Crystal Lake",
    "Fitchburg",
    "Carol Stream",
    "Hickory",
    "Streamwood",
    "Norwich",
    "Coppell",
    "San Gabriel",
    "Holyoke",
    "Bentonville",
    "Florence",
    "Peachtree Corners",
    "Brentwood",
    "Bozeman",
    "New Berlin",
    "Goose Creek",
    "Huntsville",
    "Prescott Valley",
    "Maplewood",
    "Romeoville",
    "Duncanville",
    "Atlantic City",
    "Clovis",
    "The Colony",
    "Culver City",
    "Marlborough",
    "Hilton Head Island",
    "Moorhead",
    "Calexico",
    "Bullhead City",
    "Germantown",
    "La Quinta",
    "Lancaster",
    "Wausau",
    "Sherman",
    "Ocoee",
    "Shakopee",
    "Woburn",
    "Bremerton",
    "Rock Island",
    "Muskogee",
    "Cape Girardeau",
    "Annapolis",
    "Greenacres",
    "Ormond Beach",
    "Hallandale Beach",
    "Stanton",
    "Puyallup",
    "Pacifica",
    "Hanover Park",
    "Hurst",
    "Lima",
    "Marana",
    "Carpentersville",
    "Oakley",
    "Huber Heights",
    "Lancaster",
    "Montclair",
    "Wheeling",
    "Brookfield",
    "Park Ridge",
    "Florence",
    "Roy",
    "Winter Garden",
    "Chelsea",
    "Valley Stream",
    "Spartanburg",
    "Lake Oswego",
    "Friendswood",
    "Westerville",
    "Northglenn",
    "Phenix City",
    "Grove City",
    "Texarkana",
    "Addison",
    "Dover",
    "Lincoln Park",
    "Calumet City",
    "Muskegon",
    "Aventura",
    "Martinez",
    "Greenfield",
    "Apache Junction",
    "Monrovia",
    "Weslaco",
    "Keizer",
    "Spanish Fork",
    "Beloit",
    "Panama City"
]

var todaysForecast = document.getElementById("currentWeather");
var fiveDayForecast = document.querySelectorAll(".five-day");
var citySearchSection = document.getElementById("citySearch");
var cityInput = document.getElementById("city");
var searchButton = document.getElementById("searchBtn");
var citySearched = "";

var previousCities = [];
var tempWeatherData = [];

//gets the latitude and longitude of the location to use in the weather api
function findLocation(location){
    var geoReq = "https://api.openweathermap.org/geo/1.0/direct?q=" + location + "&appid=9c26d768ead86b39036caf98fb0abbfa";

    fetch(geoReq).then(function(response){
        if(response.ok){
            //stores the name in a local variable to be refenced later
            //capitalizes it first because we live in a society
            location.trim().charAt(0).toUpperCase();
            citySearched = location;
            return response.json();
        }
    }).catch(function(error){
        console.error('Error: ' + error);
    }).then(function(data){
        let lat = data[0].lat;
        let lon = data[0].lon;
        getForecast(lat, lon);
    });

}

/*
    I need to get the date, weather, temp, wind & humidity
    if it's 5 day / 3 hours Starts the current day at 9AM
    40 total
    if I just get every index % 8 it should return every day
    5 data entries for current day
    8 for day 2-4 onward
    3 entries for day 5
    date = new Date(data.list[index].dt_txt.replace(" ", "T"));
    dateString = date.toLocaleDateString();
    weather = data.list[index].weather[0].description;
    temp = data.list[index].main.temp;
    wind = data.list[index].wind.speed;
    humidity = data.list[index].main.humidity;
*/
function processWeatherData(data){
    //resets the value for the temporary array to store what the user is currently looking at
    let contains = false;
    tempWeatherData = [];
    //for each element of the 5day/3hour forecast
    for(let threeHourData of data.list){
        //gets the data I want from the request
        let date = new Date(threeHourData.dt_txt.replace(" ", "T")).toLocaleDateString();
        let temp = threeHourData.main.temp;
        let wind = threeHourData.wind.speed;
        let humi = threeHourData.main.humidity;
        let weather = threeHourData.weather[0].description;

        contains = false;
        for(let stored of tempWeatherData) {
            //if I already stored it, it will update and average the value hopefully
            if(stored[0] === date){
                stored[1] = Math.floor(((stored[1] + temp) / 2) * 100) / 100;
                stored[2] = Math.floor(((stored[2] + wind) / 2) * 100) / 100;
                stored[3] = Math.floor(((stored[3] + humi) / 2) * 100) / 100;
                contains = true;
            }
        }

        //if it isn't something I stored before it will add it
        //This stores in the format of an array for the five days
        //This visual of data for one city should hopefully help me
        // [[date1, temp1, wind1, humi1, weather1, city],
        //  [date2, temp2, wind2, humi2, weather2, city],
        //  [date3, temp3, wind3, humi3, weather3, city],
        //  [date4, temp4, wind4, humi4, weather4, city],
        //  [date5, temp5, wind5, humi5, weather5, city]]
        if(!contains){
            tempWeatherData.push([date, temp, wind, humi, weather, citySearched]);
        }
    }

    //stores the data so it's much easier to reference later instead of making another call to the api
    //The temp weather data contains the current day and the 5 day forecast
    updatePreviousCities(tempWeatherData);

    //then after it's stored it shows up
    displayData(tempWeatherData);
}

function displayData(weatherData){
    let mainWeather = weatherData[0];
    mainWeatherInput(mainWeather[0], mainWeather[1], mainWeather[2], mainWeather[3], mainWeather[4], mainWeather[5])

    //This is a mouthfull but hopefully loops and adds the weather for the cards
    let x = 1;
    for(let forecastCard of fiveDayForecast){
        weatherForecastInput(forecastCard, weatherData[x][0], weatherData[x][1], weatherData[x][2], weatherData[x][3], weatherData[x][4]);
        x++;
    }

}

function updatePreviousCities(dataToStore){
    //I only want to store 8 entities otherwise it will pop one out
    if(previousCities.length >= 8){
        previousCities.pop();
    }

    let alreadySearched = false;

    for(let cityForecast of previousCities){
        if(cityForecast[0][5] === dataToStore[0][5]){
            alreadySearched = true;
        }
    }

    if(!alreadySearched){
        //adds the new data unto the start of the array
        //This becomes an array of arrays of arrays
        //[weatherdata1, ... , weatherdata8]
        //with each weatherdata element being shown above as an array of arrays
        previousCities.unshift(dataToStore);

        //stores it in the local storage
        //not sure if this is part of the challenge but why not
        localStorage.setItem("previouslyViewedCities", JSON.stringify(previousCities));

        //this part of the function updates the buttons on the sidebar under the search button
        updatePreviousButtons();
    }
}

//when I click on a previouslyViewedCity button
function returnToPreviouslyViewedCity(event){
    event.preventDefault();
    //checks the name to see where it's at
    let cityName = event.target.innerHTML;
    for(let weatherData of previousCities){
        //when it's found it displays
        if(weatherData[0][5] === cityName){
            displayData(weatherData);
            break;
        }
    }

}

//removes all buttons from the city search side bar section in order to show new ones when updated
function removePreviouseButtons(){
    for(let citySearchChildElement of document.querySelectorAll(".previous")){
        citySearchSection.removeChild(citySearchChildElement);
    }
}

function renderPreviousButtons(){
    removePreviouseButtons();

    for(let cityData of previousCities){
        //create the button
        let previousButton = document.createElement("button");
        previousButton.classList.add("btn", "btn-secondary", "previous");
        previousButton.setAttribute("type", "button");
        previousButton.innerHTML = cityData[0][5];

        //add and event listener to display the data on click
        previousButton.addEventListener("click", returnToPreviouslyViewedCity);

        //append the button
        citySearchSection.append(previousButton);
    }
}

function updatePreviousButtons(){
    //checks localstorage if there's some stored data
    let storedCities = JSON.parse(localStorage.getItem("previouslyViewedCities"));

    if(storedCities !== null){
        previousCities = storedCities;
    }

    //will render any stored previous searches in the local storage
    renderPreviousButtons();
}

function getForecast(lat, lon){
    //creates the request url given by the geolocation api
    var forecastReq = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=9c26d768ead86b39036caf98fb0abbfa";

    //if response.ok is true then we kick things off
    fetch(forecastReq).then(function(response){
        if(response.ok){
            return response.json();
        }
    }).then(function(data){
        processWeatherData(data);
    });
}

//adds an autocomplete to the city search
$('#city').autocomplete({
    //if the minLength isn't here the list goes longer than the webpage
    minLength: 3,
    source: cities
});

//creates 3 paragraphs of the temp wind and humidity and returns them as an array
function formatDetails(temp, wind, humi){
    let tempSection = document.createElement("p");
    let windSection = document.createElement("p");
    let humiSection = document.createElement("p");
    
    //formats the section to be the variable type name plus its value plus the value's units
    tempSection.innerHTML = "Temp: " + temp + " \u00b0F";
    windSection.innerHTML = "Wind: " + wind + " MPH";
    humiSection.innerHTML = "Humidity: " + humi + " %";

    return [tempSection, windSection, humiSection];
}

function chooseEmoji(weatherCondition){
    //I don't really know what words they'll use to describe weather so I went with all I could think of
    //All of these were found on https://emojipedia.org/
    //they don't have very diverse weather emojis tho 
    switch(weatherCondition){
        case "overcast clouds":
        case "rain":
            return "🌧️";
        case "lightning":
        case "heavy rain":
            return "⛈️";
        case "sunny":
        case "clear sky":
        case "sun":
            return "☀️";
        case "scattered clouds":
        case "broken clouds":
            return "🌤️";
        case "light sun":
        case "light clouds":
            return "⛅";
        case "light rain":
            return "🌦️";
        case "clouds":
        case "few clouds":
        case "cloudy":
            return "☁️";
        case "light snow":
        case "snow":
            return "🌨️";
        case "fog":
            return "🌫️";
        default:
            return "";
    }
}

//fills out the main card on the page
function mainWeatherInput(date, temp, wind, humi, weatherDescription, city){
    todaysForecast.innerHTML = "";
    //formats the main card putting the city name and the date in parenthesis
    let cityH2 = document.createElement("h2");
    cityH2.innerHTML = city + " (" + date + ") " + chooseEmoji(weatherDescription);
    todaysForecast.append(cityH2);

    //runs through each of the formatted data elements and appends them
    for(let detail of formatDetails(temp, wind, humi)){
        todaysForecast.append(detail);
    }
}

//fills out the 5 day forecast cards
function weatherForecastInput(forecastCard, date, temp, wind, humi, weatherDescription){
    forecastCard.innerHTML = "";
    //formats the little cards putting the emojis on seperate lines from the date
    let dateH2 = document.createElement("h2");
    dateH2.innerHTML = date;
    let emoji = document.createElement("p");
    emoji.innerHTML = chooseEmoji(weatherDescription);

    forecastCard.append(dateH2);
    forecastCard.append(emoji);

    //runs through each of the formatted data elements and appends them
    for(let detail of formatDetails(temp, wind, humi)){
        forecastCard.append(detail);
    }
}

function getWeatherInfo(cityName){
    //maybe will help, didn't seem to in my testing
    try {
        findLocation(cityName);
    } catch (error) {
        console.log(error);
        alert("Something went wrong :(");
    }
}

//adds an event listener to the button for a city to search
searchButton.addEventListener("click", function(event){
    event.preventDefault();
    if(cityInput.value !== null){
        getWeatherInfo(cityInput.value);
    }
});

//so any previously stored cities in local storage load in
updatePreviousButtons();
