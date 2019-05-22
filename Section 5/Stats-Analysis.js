
const stats = require("stats-analysis");

var arr = [98, 98.6, 98.4, 98.8, 200, 120, 98.5];

//standard deviation 
var my_stddev = stats.stdev(arr).toFixed(2);
 
//mean 
var my_mean = stats.mean(arr).toFixed(2);
 
//median 
var my_median = stats.median(arr);
 
//median absolute deviation 
var my_mad = stats.MAD(arr);
 
// Get the index locations of the outliers in the data set 
var my_outliers = stats.indexOfOutliers(arr);
 
// Remove the outliers 
var my_without_outliers = stats.filterOutliers(arr);

//display our stats
console.log("Raw data is ", arr);
console.log("Standard Deviation is ", my_stddev);
console.log("Mean is ", my_mean);
console.log("Median is ", my_median);
console.log("Median Abs Deviation is " + my_mad);
console.log("The outliers of the data set are ", my_outliers);
console.log("The data set without outliers is ", my_without_outliers);

var fords = require("./fordReal.json")

//display how many Ford models are in our data set
console.log("There are " + fords.Count +  " Ford models in the data set");

//loop over the set
var index = 1
for(var i=0; i<fords.Count; i++) {
    
    //get this model
    var model = fords.Results[i].Model_Id;
    
    //pull it's name
    var name = fords.Results[i].Model_Name;
    
    //if the model name does not have numerics in it
    if(! name.match(/[0-9]/i)) {
        //display the model name
        console.log("Model " + index + " is a " + name);
        index++;
    }
    
    //only display the first 5
    if (index>5) break;
}

