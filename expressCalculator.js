// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
// Create express app instance.
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:num_one/:num_two", function(req, res) {

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  let operation = req.params.operation;
  let num_one = parseInt(req.params.num_one);
  let num_two = parseInt(req.params.num_two);
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
      // Add your logic here. Pun intended.
      result = num_one + num_two;
      break;
    case "subtract":
      // Subtract logic
      result = num_one - num_two;
      break;
    case "multiply":
      // Multiply
      result = num_one * num_two;
      break;
    case "divide":
      // Divide
      result = num_one / num_two;
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
app.listen(PORT, function(){
  console.log(`Listening on http://localhost:${PORT}`)
});
