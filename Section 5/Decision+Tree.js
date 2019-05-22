
var DecisionTree = require('decision-tree');
var fs = require("fs");
var d3 = require("d3");
var util = require('util');

//read in the car/mpg file
fs.readFile("car-mpg.csv", "utf8", function(error, data) {
    
    //parse out the csv into a dataset
    var dataset = d3.csvParse(data);
    
    //display on screen - just for debugging
    //console.log(JSON.stringify(dataset));

    var rows = dataset.length;
    console.log("rows = " + rows);
    var training_size = rows * 2 / 3;
    console.log("training_size = " + training_size);
    var test_size = rows - training_size;
    console.log("test_size = " + test_size);

    //Prepare training dataset
    var training_data = dataset.slice(1, training_size);

    //Prepare test dataset
    var test_data = dataset.slice(training_size, rows);

    //Setup Target Class used for prediction
    var class_name = "mpg";

    //Setup Features to be used by decision tree
    var features = ["cylinders","displacement","horsepower", "weight", "acceleration", "modelyear", "maker"];

    //Create decision tree and train model
    var dt = new DecisionTree(training_data, class_name, features);
    console.log("Decision Tree is " + util.inspect(dt, {showHidden: false, depth: null}));

    //Predict class label for an instance
    var predicted_class = dt.predict({
        cylinders: 8,
        displacement: 400,
        horsepower: 200,
        weight: 4000,
        acceleration: 12,
        modelyear: 70,
        maker: "US"
    });
    console.log("Predicted Class is " + util.inspect(predicted_class, {showHidden: false, depth: null}));

    //Evaluate model on a dataset
    var accuracy = dt.evaluate(test_data);
    console.log("Accuracy is " + accuracy);

    //Export underlying model for visualization or inspection
    var treeModel = dt.toJSON();
    console.log("Decision Tree JSON is " + util.inspect(treeModel, {showHidden: false, depth: null}));
});    


