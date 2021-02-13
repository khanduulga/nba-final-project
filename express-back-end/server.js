const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const lebron_shots = require('./data/lebron_shots.json')
const curry_shots = require('./data/curry_shots.json')
const lebron_stats = require('./data/lebron_stats.json')
const curry_shots = require('./data/curry_stats.json')

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Sample GET route
App.get('/api/shots', (req, res) => 
  {if (req.query.name === "lebron") {
    res.json(lebron_shots)
  } else if (req.query.name === "curry") {
    res.json(curry_shots)
  }}
)
App.get('/api/stats', (req, res) =>
  {if (req.query.name === "lebron") {
    res.json(lebron_stats)
  } else if (req.query.name === "curry") {
    res.json(curry_stats)
  }}
)
App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
