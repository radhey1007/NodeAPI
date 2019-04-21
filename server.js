// Import express
let express =require('express');

// Import Body parser
let bodyParser = require('body-parser');

// allow cors origin

let cors = require('cors')

// import mongoose
let mongoose = require('mongoose');

// Initialize the app
let app = express();

// Import routes
let apiRoutes = require("./src/routes/routes");


// import cors origin
//let cors = require('cors');

// configure Bodyparser to handle post request

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.use(cors());                    // To enable Cross Origin Resource Sharing CORS


config = require('./src/connection/db');

// Connect to Mongoose and set connection variable
//mongoose.connect('mongodb://localhost/contact');

mongoose.connect(config.DB,{ useNewUrlParser: true }).then(
    () => {
        console.log('Database is connected');
    },
    err => {
        console.log(err);
        console.log('err in connecting db');
   
    }
);


var db = mongoose.connection;

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/',(req,res) => res.send('Hello world with Express'));

 // Use Api routes in the App
app.use('/api',apiRoutes);

// launch app to listen to specified port
app.listen(port, function() {
    console.log('project running on port ' + port); 
});



