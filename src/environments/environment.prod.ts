export const environment = {
  production: true,
  apiURL: 'http://realtime-api.opendatanepal.com',
  allAirStations:'/airquality/api/station/list',
  latestAll:'/airquality/api/latest',
  archive:'/airquality/api/archive',
  twentyFourHData:'/airquality/api/24hrs'
};

/*
 Back to top
Air Quality API
List all AQ stations
Get Latest Data
Get Archive Data
Get 24 Hours Data
River Watch API
List all stations
Get Latest Data
Get Archive Data
Get 24 Hours Data
Kalimati Fruits & Vegetables Price API
Get Today Price
Get Last 30 Days Data
Get Archive Data
RealTime API Documentation
This API Documentation guide you how to define multiple requests and get needed data response. http://opendatanepal.com/api.

Air Quality API ¶
API resources related to Air Quality

LIST ALL AQ STATIONS  ¶
List all AQ stationsGET/airquality/api/station/list
Example URI
GET http://realtime-api.opendatanepal.com/airquality/api/station/list
Response  200Show
GET LATEST  ¶
Get latest data with custom filter of all available stations.

Get Latest DataGET/airquality/api/latest{?id,station,params,coordinate}
Example URI
GET http://realtime-api.opendatanepal.com/airquality/api/latest?id=12&station=Pulchowk, Lalitpur&params=pm25&coordinate=true
URI ParametersHide
id
number (optional) Example: 12
Id of a station

station
string (optional) Example: Pulchowk, Lalitpur
Station name

params
string (optional) Default: tsp, pm1, pm10, pm25, blackcarbon Example: pm25
Filter by certain parameter.

coordinate
boolean (optional) Default: false Example: true
Coordinates with longitude and latitude

Response  200Hide
Headers
Content-Type: application/json
Body
{
  "meta": {
    "name": "Open Data Nepal",
    "license": "CC BY 4.0",
    "website": "http://opendatanepal.com",
    "found": 1
  },
  "result": [
    {
      "id": 13,
      "stationName": "Pulchowk, Lalitpur",
      "coordinate": {},
      "params": {
        "pm10": [
          {
            "value": null,
            "datetime": "2019-03-13T23:58:00.000Z"
          }
        ],
        "pm25": [
          {
            "value": 55,
            "datetime": "2019-03-14T00:45:00.000Z"
          }
        ]
      }
    }
  ]
}
GET ARCHIVE DATA  ¶
Get archive data with custom filter of all available stations.

Get Archive DataGET/airquality/api/archive{?id,station,params,date_range,page,limit,coordinate}
Example URI
GET http://realtime-api.opendatanepal.com/airquality/api/archive?id=12&station=Pulchowk, Lalitpur&params=pm25&date_range=2019-02-13T12:52:00.000Z,2019-02-14T12:52:00.000Z&page=1&limit=100&coordinate=true
URI ParametersHide
id
number (optional) Example: 12
Id of a station

station
string (optional) Example: Pulchowk, Lalitpur
Station name

params
string (optional) Default: tsp, pm1, pm10, pm25, blackcarbon Example: pm25
Filter by certain parameter.

date_range
string (optional) Example: 2019-02-13T12:52:00.000Z,2019-02-14T12:52:00.000Z
Filter by Date Start,End.

page
number (optional) Default: 1 Example: 1
Page Navigation.

limit
number (optional) Default: 100 Example: 100
Limit Response

coordinate
boolean (optional) Default: false Example: true
Coordinates with longitude and latitude

Response  200Show
GET 24 HOURS DATA  ¶
Get 24 hours data of all available stations.

Get 24 Hours DataGET/airquality/api/24hrs{?id,station,params,page,limit,coordinate}
Example URI
GET http://realtime-api.opendatanepal.com/airquality/api/24hrs?id=12&station=Pulchowk, Lalitpur&params=pm25&page=1&limit=100&coordinate=true
URI ParametersHide
id
number (optional) Example: 12
Id of a station

station
string (optional) Example: Pulchowk, Lalitpur
Station name

params
string (optional) Default: tsp, pm1, pm10, pm25, blackcarbon Example: pm25
Filter by certain parameter.

page
number (optional) Default: 1 Example: 1
Page Navigation.

limit
number (optional) Default: 100 Example: 100
Limit Response

coordinate
boolean (optional) Default: false Example: true
Coordinates with longitude and latitude

Response  200Show
River Watch API ¶
API resources related to River Watch

LIST ALL STATIONS  ¶
List all stationsGET/riverwatch/api/station/list
Example URI
GET http://realtime-api.opendatanepal.com/riverwatch/api/station/list
Response  200Show
GET LATEST  ¶
Get latest data with custom filter of all available stations.

Get Latest DataGET/riverwatch/api/latest{?id,station,danger_level,warning_level,coordinate}
Example URI
GET http://realtime-api.opendatanepal.com/riverwatch/api/latest?id=2&station=Arun River at Uwa Gaon&danger_level=true&warning_level=true&coordinate=true
URI ParametersHide
id
number (optional) Example: 2
Id of a station

station
string (optional) Example: Arun River at Uwa Gaon
Station name

danger_level
boolean (optional) Default: false Example: true
Filter by certain parameter.

warning_level
boolean (optional) Default: false Example: true
Filter by certain parameter.

coordinate
boolean (optional) Default: false Example: true
Coordinates with longitude and latitude

Response  200Show
GET ARCHIVE DATA  ¶
Get archive data with custom filter of all available stations.

Get Archive DataGET/riverwatch/api/archive{?id,station,date_range,danger_level,warning_level,page,limit,coordinate}
Example URI
GET http://realtime-api.opendatanepal.com/riverwatch/api/archive?id=12&station=Arun River at Uwa Gaon&date_range=2019-02-13T12:52:00.000Z,2019-02-14T12:52:00.000Z&danger_level=true&warning_level=true&page=1&limit=100&coordinate=true
URI ParametersHide
id
number (optional) Example: 12
Id of a station

station
string (optional) Example: Arun River at Uwa Gaon
Station name

danger_level
boolean (optional) Default: false Example: true
Filter by certain parameter.

warning_level
boolean (optional) Default: false Example: true
Filter by certain parameter.

date_range
string (optional) Example: 2019-02-13T12:52:00.000Z,2019-02-14T12:52:00.000Z
Filter by Date Start,End.

page
number (optional) Default: 1 Example: 1
Page Navigation.

limit
number (optional) Default: 100 Example: 100
Limit Response

coordinate
boolean (optional) Default: false Example: true
Coordinates with longitude and latitude

Response  200Show
GET 24 HOURS DATA  ¶
Get 24 hours data of all available stations.

Get 24 Hours DataGET/riverwatch/api/24hrs{?id,station,danger_level,warning_level,page,limit,coordinate}
Example URI
GET http://realtime-api.opendatanepal.com/riverwatch/api/24hrs?id=12&station=Arun River at Uwa Gaon&danger_level=true&warning_level=true&page=1&limit=100&coordinate=true
URI ParametersHide
id
number (optional) Default: Null Example: 12
Id of a station id=173,183

station
string (optional) Example: Arun River at Uwa Gaon
Station name

danger_level
boolean (optional) Default: false Example: true
Filter by certain parameter.

warning_level
boolean (optional) Default: false Example: true
Filter by certain parameter.

page
number (optional) Default: 1 Example: 1
Page Navigation.

limit
number (optional) Default: 100 Example: 100
Limit Response

coordinate
boolean (optional) Default: false Example: true
Coordinates with longitude and latitude

Response  200Show
Kalimati Fruits & Vegetables Price API ¶
API resources related to River Kalimati Fruits & Vegetables Price

GET TODAY PRICE  ¶
Get Today PriceGET/kalimati-price/api/today
Example URI
GET http://realtime-api.opendatanepal.com/kalimati-price/api/today
Response  200Show
GET LAST 30 DAYS  ¶
Get Last 30 Days price data with custom filter of all available fruits & vegetables.

Get Last 30 Days DataGET/kalimati-price/api/30days{?id}
Example URI
GET http://realtime-api.opendatanepal.com/kalimati-price/api/30days?id=183
URI ParametersHide
id
number (optional) Example: 183
Id of a commodity id =187,183

Response  200Show
GET ARCHIVE DATA  ¶
Get archive data with custom filter of all available fruits & vegetables.

Get Archive DataGET/kalimati-price/api/archive{?id,date_range}
Example URI
GET http://realtime-api.opendatanepal.com/kalimati-price/api/archive?id=183&date_range=2019-02-01,2019-02-14
URI ParametersHide
id
number (optional) Example: 183
Id of a commodity id =187,183

date_range
string (optional) Example: 2019-02-01,2019-02-14
Filter by Date Start,End.

Response  200Show
Generated by aglio on 17 Mar 2019
*/