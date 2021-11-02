const request = require('postman-request');

const geocode = (address, callback) => {
     const url =
          'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
          encodeURIComponent(address) +
          '.json?access_token=pk.eyJ1IjoibWFydmVyaWNtZWRpYXZpbGxvIiwiYSI6ImNrdmM2eGE2NjA5M3Eyd251eHBsNzBnZnEifQ.K272VkC9a_S6wfW3ER2p3w&limit=1';

     request({ url, json: true }, (error, { body }) => {
          // request({ url: url, json: true }, (error, response) => { //before
          if (error) {
               callback('Unable to connect to location services', undefined);
          } else if (body.features.length === 0) {
               // } else if (response.body.features.length === 0) { //before
               callback(
                    'Unable to find location. Try another location',
                    undefined
               );
          } else {
               callback(undefined, {
                    longitude: body.features[0].center[0],
                    latitude: body.features[0].center[1],
                    location: body.features[0].place_name,

                    // longitude: response.body.features[0].center[0], //before
                    // latitude: response.body.features[0].center[1],
                    // location: response.body.features[0].place_name,
               });
          }
     });
};

module.exports = geocode;
