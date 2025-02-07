function kehamassiindeks(cm:number, kg:number):number{
    let m:number= cm/100;
    return kg/(m*m);
}

console.log(kehamassiindeks(173, 63));

let massid:number[]=[65, 55, 60, 70]
for(let mass of massid){
    console.log(kehamassiindeks(173, mass));
}

let indeksid:number[]=massid.map(mass => kehamassiindeks(173, mass));
console.log(indeksid);

//looge valem kehamassiindeksi arvutamiseks
//1,3 korda kehakaal jagatud pikkusega astmes 2,5
//aitab käsklus math.pow
function kehm(cm:number, kg:number):number{
    let n:number= cm/100;     //muudan cm to meetriteks
    return 1.3 * kg / Math.pow(n, 2.5);    // väljastan kehamassiindeksi
}
console.log(kehm(173, 63));


let indeks:number[]=massid.map(mass => kehm(173, mass));
console.log(indeks);
//arvutage kehamassiindeks mitmesuguste pikkustega, sama massi juures
//näidake, kuidas väärtused erinevad

let vastus:number [][]=[];
for(let pikkus:150; pikkus<190; pikkus+=2){
    vastus.push([pikkus, kehamassiindeks(pikkus, 90),kehm(pikkus, 90)]);
}

console.log(vastus);
