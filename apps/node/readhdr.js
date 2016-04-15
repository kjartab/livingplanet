var xml2js = require('xml2js');
var fs = require('fs');


var xml = "<root>Hello xml2js!</root>"
xml2js.parseString(xml, function (err, result) {
    console.dir(result);
});

var fileName = '../../data/SIR_FDM_L2/CS_OFFL_SIR_FDM_2__20160101T000318_20160101T000834_C001.HDR';

var fileNameDbl = '../../data/SIR_FDM_L2/CS_OFFL_SIR_FDM_2__20160101T000318_20160101T000834_C001.DBL';

// var l2format = require('./l2');

// fs.readFile(fileName, 'utf-8', function(err, data) {
//     xml2js.parseString(data, function(err, data) {
        
//         var file = {
//             fixedHeader : data.Earth_Explorer_Header.Fixed_Header,
//             variableHeaders : data.Earth_Explorer_Header.Variable_Header
//         }

//         var p = file.variableHeaders[0].SPH[0].Product_Location[0];
//         var f = 1000000;
//         var startLocation = { lat: Number(p.Start_Lat[0]._)/f, lon: Number(p.Start_Long[0]._)/f };
//         var stopLocation = { lat: Number(p.Stop_Lat[0]._)/f, lon: Number(p.Stop_Long[0]._)/f };
//     });
// }); 

function handleError(error) {
    return console.error('Uhoh, there was an error', error);
}

function handleXml(xmlData) {

    xml2js.parseString(xmlData, function(error, data) {
        
        if (error) {
            handleError(error);
        }

        var file = {
            fixedHeader : data.Earth_Explorer_Header.Fixed_Header,
            variableHeaders : data.Earth_Explorer_Header.Variable_Header
        }

        var p = file.variableHeaders[0].SPH[0].Product_Location[0];
        var f = 1000000;
        var startLocation = { lat: Number(p.Start_Lat[0]._)/f, lon: Number(p.Start_Long[0]._)/f };
        var stopLocation = { lat: Number(p.Stop_Lat[0]._)/f, lon: Number(p.Stop_Long[0]._)/f };

        console.log(startLocation, stopLocation);
    });

}
function readXml(filePath, callback) {

    fs.readFile(filePath, 'utf-8', function(error, data) {

        if (error) {
            handleError(error);
        }

        callback(data);
    })

}


readXml(fileName, handleXml)
