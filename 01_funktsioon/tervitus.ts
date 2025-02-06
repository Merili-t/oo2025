
let eesnimi:string= "juku"
let vanus:number=7;
console.log("Tere, " + eesnimi);
if(vanus<7){
    console.log("Tasuta");
} else{
    console.log("Osta pilet!");
    if(vanus<=18){
        console.log("lapsepilet");
    } else{
        console.log("lapsepilet");
    }
}

let symbolid:string[]=[];
for (let nr=0; nr<vanus; nr++){
    symbolid.push("*");
}
console.log(symbolid.join(""));
