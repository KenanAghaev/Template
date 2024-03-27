// Sade ve murekkeb


// let a=+prompt("ededi daxil edin:");
// let yoxla=true;

// for(let i=2;i<a;i++){
//     if(a%i===0){
//         yoxla=false;
//         break;
//     }
// }
// if(yoxla===false){
//     console.log(`${a} ededi murekkebdir...`);
// }
// if(yoxla===true){
//     console.log(`${a} ededi sadedir...`);
// }




//Mukemmel eded


// let a=+prompt("ededi daxil edin");
// let cem=0;
// for(let i=1;i<a;i++){
//     if(a%i===0){
//         cem+=i;
//     }
// }
// if(cem===a){
//     console.log(`${a} mukemmel ededdir...`);
// } else{
//     console.log(`${a} mukemmel eded deyil...`)
// }



// daxil olunan ededler arasindaki mukemmel ededler

// let a=+prompt("birinci ededi daxil edin:");
// let b=+prompt("ikinci ededi daxil edin:");
// let cem=0;

// for( let i=a;i<=b;i++){
//     for(let d=1;d<i;d++){
//         if(i%d===0){
//             cem+=d;
//         }
//     }
//     if(cem===i){
//         console.log(i);
//     }
//     cem=0;
// }


//daxil olunan ededler arasinda sadeler

// let a = +prompt("Birinci ededi daxil edin:");
// let b = +prompt("İkinci ededi daxil edin:");

// for (let i = a; i <= b; i++) {
//     let yoxla = true;
//     for (let d = 2; d < i; d++) {
//         if (i % d === 0) {
//             yoxla = false;
//             break; 
//         }
//     }
//     if (yoxla===true) {
//         console.log(i);
//     }
// }



// daxil olunan edeedler arasinda sonu 7 ile bitenler


// let a=+prompt("birinci ededi daxil edin:");
// let b=+prompt("ikinci ededi daxil edin:");

// for (let i=7;i<=b;i+=10){
//     if(i>=a){
//         console.log(i);
//     }
// }
