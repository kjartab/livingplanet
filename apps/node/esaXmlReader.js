var xml2js = require('xml2js');
var fs = require('fs');

module.exports = (function() {





    function readXml(data, callback) {
        callback(err, data);
    }

    return {
        readXml : readXml
    }


})();