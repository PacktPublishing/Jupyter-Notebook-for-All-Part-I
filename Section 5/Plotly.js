
var seedrandom = require('seedrandom');
var rng = seedrandom('Jupyter');
//setup plotly
var plotly = require('plotly')(username="sonalis.packtpub@gmail.com", api_key="WXx2uYj8QCc97Az8dT4j")
var x = [];
for (var i = 0; i < 500; i ++) {
    x[i] = Math.random();
}
require('plotly')(username, api_key);
var data = [
  {
    x: x,
    type: "histogram"
  }
];
var graphOptions = {filename: "basic-histogram", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});



