// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'http://realtime-api.opendatanepal.com',
  allAirStations:'/airquality/api/station/list',
  latestAll:'/airquality/api/latest',
  archive:'/airquality/api/archive',
  twentyFourHData:'/airquality/api/24hrs',
  colorScheme:{
                good : {
                  color:'success',
                  text:'Health impact minimal.',
                },
                satisfactory: {
                  color:'info',
                  text:'Minor breathing discomfort to sensetive people.',
                },
                moderate:{
                  color:'warning',
                  text:'Breathing discomfort to asthama patients, elderly and children.',
                },
                poor:{
                  color:'secondary',
                  text:'Breathing discomfort to all.',
                },
                veryPoor:{
                  color:'dark',
                  text:'Respiratory illness on prolonged exposure.',
                },
                severe:{
                  color:'danger',
                  text:'Health impact even on light physical work. Serious impact on people with heart/lung disease.',
                },

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
