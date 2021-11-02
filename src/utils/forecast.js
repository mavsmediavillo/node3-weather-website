const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
     const url =
          'https://api.openweathermap.org/data/2.5/weather?lat=' +
          latitude +
          '&lon=' +
          longitude +
          '&appid=b085eeabe0a0ba47dda6518e2363f70a&units=metric';

     request({ url, json: true }, (error, { body }) => {
          // request({ url: url, json: true }, (error, response) => { //before
          if (error) {
               callback(
                    chalk.red(
                         'Unable to connect to weather service for latitude'
                    ),
                    undefined
               );
          } else if (body.error) {
               // } else if (response.body.error) {
               callback(
                    chalk.red('Unable to find location at Latitude'),
                    undefined
               );
          } else {
               callback(
                    undefined,
                    `${body.weather[0].description} starting in the afternoon, continuing until evening. It is currently ${body.main.temp} degrees out.`
               );
          }
     });
};

module.exports = forecast;
