const fs = require('fs');

let data = fs.readFile('colors.json', (err, data) =>{
    if( err ){
        throw err;
    }
    console.log("Az fs belsejében: "+data);
    return data;  // Itt nem adja majd vissza, hiába az elején az érték adás
});

console.log(`A nyers adatok: ${data}`); //Itt nem történik kiírás