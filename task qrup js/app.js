// en boyuk eded

// let numbers=[1,3,5,7,9,2,8,6,4,0];

// let a=Math.max(...numbers);
// console.log(a);

// sade ededler

// let numbers=[1,3,5,7,9,2,8,6,4,13,41,44];

// let a=numbers[0];
// for(let i=0;i<numbers.length;i++){
//     numbers[i];
//     let yoxla = true;
//         for (let d = 2; d < i; d++) {
//             if (i % d === 0) {
//                 yoxla = false;
//                 break; 
//             }
//         }
//         if (yoxla===true && i>1) {
//             console.log(i);
//         }
//     }


// uzunlugu 7 olan sozler


// let data=["salam","dunyali","javascript","proqramlasdirma","kod","frontend","backend"];
// let sozler=[];
// for(let i=0;i<data.length;i++){
//     if(data[i].length===7){
//         sozler.push(data[i]);
//     }
// }
// console.log(sozler);


//kilo boy indksi

// let a=+prompt("kilonuzu daxil edin:");
// let b=+prompt("boyunuzu daxil edin:");

// let c=(a/b)**2;

// if(c<18){
//     alert("Ideal cekiden asagi");
// }else if(c>18 && c<25){
//     alert("ideal ceki");
// }else if(c>25 && c<30){
//     alert("Ideal cekiden yuxari");
// }else if(c>30 && c<40){
//     alert("Artiq ceki (obez)");
// }else if(c>40){
//     alert("Morbid dercede piylenme");
// }


// qiymet skalasi

// let a=+prompt("Qiymetinizi daxil edin(0-100):");
// if(a>=90){
//     alert("ela");
// }else if(a>=75){
//     alert("yaxsi");
// }else if(a>=55){
//     alert("orta");
// }else if(a>=35){
//     alert("pis");
// }else if(a<35){
//     alert("kafi");
// }

//hipotenuz

// let a=+prompt("1-ci katet:");
// let b=+prompt("2-ci katet:");


// let hipotenuz=(a,b)=>Math.sqrt((a**2)+(b**2));

// console.log(hipotenuz(a,b));