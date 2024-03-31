// obyekt yaradin

// let user = {
//     name:"Kenan",
//     surname:"Aghaev",
//     age:19,
//     birthplace:"Nakhcivan",
// }
// console.log(user);


//array icinde obyektler

// let array = [
//     {
//         id:1,
//         name:"Kenan",
//         surname:"Aghaev",
//         age:19,
//         birthplace:"Nakhcivan",
//     },

//     {
//         id:2,
//         name:"Emin",
//         surname:"Alekberli",
//         age:9,
//         birthplace:"Nakhcivan",
//     },

//     {
//         id:3,
//         name:"Kamil",
//         surname:"Qulamov",
//         age:18,
//         birthplace:"Baku",
//     },

//     {
//         id:4,
//         name:"Ekrem",
//         surname:"Aliyev",
//         age:29,
//         birthplace:"Lenkeran",
//     },
// ]
// console.log(array);


// hobbi xususiyyet

// let telebeler=[
//     {
//         name:"Emin",
//         surname:"Alekberli",
//         age:19,
//         birthplace:"Nakhcivan",
//         hobbies:["Kitab oxumaq","Ingilis dili oxumaq","Dizi izlemek"],
//         feature:["Calisqan","Analitik","Celd"],
//     },
//     {
//         name:"Kenan",
//         surname:"Aghaev",
//         age:19,
//         birthplace:"Nakhcivan",
//         hobbies:["Kitab oxumaq","Yatmaq","Dizi izlemek"],
//         feature:["Tenbel","Analitik"],
//     },
// ]
// console.log(telebeler);

// students qiymet ortalamasi

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
//         id:1,
//         name:"Akif",
//         surname:"Aliyev",
//         age:19,
//         point:40,  
//     },
//     {
//         id:1,
//         name:"Leman",
//         surname:"Huseynova",
//         age:19,
//         point:85,  
//     },
//     {
//         id:1,
//         name:"Nermin",
//         surname:"Azayeva",
//         age:19,
//         point:55,  
//     } 
// ]
// let cem=0;

// students.map(telebe =>cem+= telebe.point);

// let ortalama = cem/students.length;
// console.log(ortalama);

// 90dan az olan alert

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

// let tp =  students.filter(telebe =>{return telebe.point<90});
// tp.map(telebe=>alert(`${telebe.name} 90dan asagi qiymet alib`));