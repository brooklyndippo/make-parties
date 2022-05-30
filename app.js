// Initialize express
const express = require('express')
const app = express()

// require handlebars
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

// Use "main" as our default layout
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main', handlebars: allowInsecurePrototypeAccess(Handlebars) }));
// Use handlebars to render
app.set('view engine', 'handlebars');

//--------------------------------------------------------
//--- ROUTES ---------------------------------------------

// OUR MOCK ARRAY OF EVENTS
const events = [
    { title: "Puppy Party 1", desc: "A great event that is super fun to look at and good", imgUrl: "https://images.squarespace-cdn.com/content/v1/5af442ebfcf7fda4a1b29207/1565718971777-J4KV5I7B5ER2FUOFP622/IMG_1871.JPG?format=1000w" },
    { title: "Puppy Party 2", desc: "A great event that is super fun to look at and good", imgUrl: "https://blog.imgur.com/wp-content/uploads/2016/03/puppy.jpg" },
    { title: "Puppy Party 3", desc: "A great event that is super fun to look at and good", imgUrl: "https://i.pinimg.com/736x/ba/62/2c/ba622c4e345b72c6d1e7965f14a8267e--basset-hound-puppy-hound-puppies.jpg" }
  ]
  
  // HOME - EVENTS INDEX
  app.get('/', (req, res) => {
    res.render('events-index', { events: events });
  })







//--------------------------------------------------------
// Choose a port to listen on
const port = process.env.PORT || 3000;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})