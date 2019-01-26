// Lets other files to import this module via
// require('filepath')
/*
module.exports = {

    variable: 1,
    f1 : function () {
        console.log("This is function");
    }

};

// This is private function to
var f2 = function() {
  console.log("This is private function");
};


f2();
*/


/**
 module.exports._movie = fMovie;
 module.exports._movie_2 = SMovie;
 */


/*
module.exports = {
    // this will be shared by all resources
    favMovie : ""
};
*/


// this is object factory
// every module has their own copy
module.exports = function () {
    return {
        favMovie: ""
    }
};


