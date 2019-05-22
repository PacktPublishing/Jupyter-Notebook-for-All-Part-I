
function async(arg, callback) {
  console.log('cube \''+arg+'\', and return 2 seconds later');
  setTimeout(function() { callback(arg * 3); }, 2000);
}

//function called once - after all threads complete
function final() { console.log('Done', results); }

//list of numbers to operate upon
var items = [ 0, 1, 1, 2, 3, 5, 7, 11 ];

//results of each step
var results = [];

//loop the drives the whole process
items.forEach(function(item) {
  async(item, function(result){
    results.push(result);
    if(results.length == items.length) {
      final();
    }
  })
});

