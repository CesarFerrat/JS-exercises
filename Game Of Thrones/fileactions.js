var fileFilter = require('./filefiltered.js');


function fileactions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);

    fileFilter(episodes, function () {
        console.log('Hem acabat!');
    });
}

module.exports = fileactions;