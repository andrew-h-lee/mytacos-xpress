const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3002);
app.locals.title = 'MyTacos Xpress';

app.get('/', (request, response) => {
  response.send('Love Tacos, yeah!');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});




/* Test out if app is run directly or relies another file */
if(!module.parent) {
	
}
