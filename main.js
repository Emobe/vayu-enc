var mcrypt = require('mcrypt').MCrypt,
    tripleDES = new mcrypt('tripledes', 'ecb'),
    fs = require('fs'),
    input = '~/../build/api/uploads/',
    output = '~/../build/data/';

try{
    var file = process.args[2],
        user = process.args[3];
}
catch(err){
    console.log('please specify a file');
}

tripleDES.open('cgThUA3LGnPQCFNSPEQkaAB9');


fs.readFile(input + file, function(err, data){
    var encrypted = tripleDES.encrypt(data);

    fs.writeFile(output + user + '/' + file, function(err, data){
        fs.unlink(input + file);
    });
});



