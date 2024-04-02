// ferqli renglerde print

// let birthday = new Date("03-31-2024");

// setInterval(() => {
//   let a=Math.floor(Math.random()*1000000);
//   let now = new Date();
//   let between = now - birthday;
//   let gun = Math.trunc(between / (1000 * 60 * 60 * 24));
//   let saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
//   let deqiqe = Math.trunc((between / (1000 * 60)) % 60);
//   let saniye = Math.trunc((between / 1000) % 60);
//   console.clear();
//   console.log(`%c${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`,`color:#${a}; font-size:30px`);
// }, 1000);



// Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.

// let students = [
//     {
//         id:1,
//         name:"Kenan",
//         surname:"Aghaev",
//         age:19,
//         point:100,  
//     },
//     {
//         id:2,
//         name:"Emin",
//         surname:"Elekberli",
//         age:19,
//         point:100,  
//     },
//     {
//         id:3,
//         name:"Kamil",
//         surname:"Babayev",
//         age:19,
//         point:90,  
//     },
//     {
//         id:4,
//         name:"Akif",
//         surname:"Aliyev",
//         age:19,
//         point:40,  
//     },
//     {
//         id:5,
//         name:"Leman",
//         surname:"Huseynova",
//         age:19,
//         point:85,  
//     },
//     {
//         id:6,
//         name:"Nermin",
//         surname:"Azayeva",
//         age:19,
//         point:55,  
//     } 
// ]


// let soz = prompt("telebe adini daxil edin:");

// let searching=students.find(telebe=>soz.toLowerCase()===telebe.name.toLowerCase());
// if(searching){
//     console.log(searching);
// }else{
//     console.log("Bele telebe yokhtur...");
// }






//Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:


// let soz= prompt("Sozu daxil edin:");

// let herfsayi=0;

// let a = setInterval(()=> {
//     if(herfsayi<soz.length){
//         console.log(soz.substring(0,herfsayi+1));
//         herfsayi++;
//     } else{
//         clearInterval(a);
//         let b = setInterval(()=>{
//             if(herfsayi>1){
//                 console.log(soz.substring(0,herfsayi-1));
//                 herfsayi--;
//             } else{
//                 clearInterval(b);
//             }
//         },1000);
//     }
    
// },1000);
