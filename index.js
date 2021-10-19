const fs = require('fs');

let data = fs.readFileSync('colors.json', (err, data) =>{
    if( err ){
        throw err;
    }
});

console.log(`A nyers adatok: ${data}`);

console.log(data);  //Ezek nyersek valójában

let colors = JSON.parse(data);
console.log(colors);  //Itt már szép JSON

console.log(`A JSON file ${colors.length} elemet tartalmaz.`);

console.log("Alap bejárás:");
for( color of colors){
    console.log(`${color.name} (${color.code})`);
}

console.log("foreach bejárás:");
colors.forEach( szin => console.log(`\t${szin.name}`));

colors.push( {'name': 'Black', 'code':'#000000'});
colors.push( {'name': 'White', 'code':'#FFFFFF'} );

console.log(`A tömböm ${colors.length} elemet tartalmaz.`);
colors.forEach( szin => console.log(`\t${szin.name}`));

const feher = colors.pop();
console.log("Az utolsó elem:");
console.log(feher);
console.log("A tömb elemeinek száma a kivétel után: "+colors.length);

console.log("Adott elem keresése");
const index = colors.findIndex( szin => szin!= null && szin.name === 'Ivory');
console.log("Az Ivory szín indexe: "+index);

delete colors[2]; //2 indexű elem törlése, ez a harmadik, mert 0-val kezdünk.
console.log(colors);
console.log("Az elemek a törölt tömbben:");
for( color of colors){
    if( color != null)
        console.log(`${color.name} (${color.code})`);
}

console.log("Adott szín megkeresése és kimásolása");
const keresett = colors.find( szin => szin != null && szin.code==="#000000");
console.log(keresett);

console.log("Új felépítésű tömb kinyerése")
let i=0;
const szinTomb = colors.map( szin => ({"cId":i++, "cName":szin.name}));
console.log( szinTomb );

szinTomb.push({"cId":4, "cName":"Purple"});
szinTomb.push({"cId":5, "cName":"Áfonyakék"});
szinTomb.push({"cId":6, "cName":"Beige"});
szinTomb.push({"cId":7, "cName":"Barna"});


console.log("Rendezzünk # -1:");
const rendezett1 = szinTomb.sort( (a,b)  => a.cName-b.cName); //Nem így kell megcsinálni

/*
console.log("Rendezzünk # 1:"); //Bonyolult dolgok is lehetnek az if-ben
const rendezett = szinTomb.sort( (a,b)  => {
    if( a.cName < b.cName) return -1; // Jó as sorrend
    if( a.cName > b.cName) return 1;  // Nem jó a sorrend, cserélni kell
    return 0; //Megegyezik a két elem
});
*/

console.log("Rendezzünk # 2:"); //
const rendezett = szinTomb.sort( (a,b) => a.cName.localeCompare(b.cName));
console.log( rendezett );

console.log("Adott tulajdonságú elemek kiszűrése");
const kiszurt1 = szinTomb.filter( (szin) => true);
console.log( kiszurt1 );

console.log("---\nSzűrés számra")
const kiszurt2 = szinTomb.filter( (szin) => szin.cId > 3 );
console.log( kiszurt2 );

console.log("---\nSzűrés szövegre") //regex
let regex = /^B\w*/;
const kiszurt3 = szinTomb.filter( (szin) => {
    // console.log(`szin -> ${szin.cName} (${regex.test(szin.cName)})` );
    if( szin === null ) return false;
    return regex.test(szin.cName);
} );
console.log( kiszurt3 );

//console.log(szinTomb);

/*
map
sort
filter


find
findIndex
pop
delete
JSON.parse
length
push
for( elem of sokasag)
sokasag.forEach( elem => fuggveny);

some
*/

/*
regex

test
split
replace
match

*/
