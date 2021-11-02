console.log('Client side javascript file is loaded');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', e => {
     e.preventDefault();

     const location = search.value;
     messageOne.textContent = 'Loading...';
     messageTwo.textContent = '';
     fetch('http://localhost:3000/weather?address=' + location).then(response =>
          response.json().then(data2 => {
               if (data2.error) {
                    // console.log(data2.error);
                    messageOne.textContent = data2.error;
               } else {
                    console.log(data2.location);
                    console.log(data2.forecast);

                    messageOne.textContent = data2.location;
                    messageTwo.textContent = data2.forecast;
               }
          })
     );
});
