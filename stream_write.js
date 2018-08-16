var fileToAccess = require('fs');
var config = {
    aVariable : "bubba",
    anotherVariable : "fet",
    aFinalVariable : 15 
};

var configText = JSON.stringify(config);
var someOptions = {encoding:'utf8', flag:'w'};
fileToAccess.writeFile('./config.txt', someOptions, function(err){
    if (err) {
        console.log("config file write fail");
    } else {
        console.log("config saved");
    }
});