const sel1 = document.getElementById('sel1');
const inp1 = document.getElementById('inp1');
const btn = document.getElementById('btn');
const inp2 = document.getElementById('inp2');
const sel2 = document.getElementById('sel2');

fetch('https://v6.exchangerate-api.com/v6/af956424b863d8bbad7e64e6/latest/AZN').then(res=>res.json().then(data=>{data.conversion_rates
for(let i in data.conversion_rates){
    // console.log(`${i} ${data.conversion_rates[i]}`);
    const val1 = document.createElement('option');
    val1.setAttribute('value',`${i}`);
    val1.textContent=i;
    const val2 = document.createElement('option');
    val2.setAttribute('value',`${i}`);
    val2.textContent=i;
    sel1.append(val1);
    sel2.append(val2);
} 
}
));

let aaa=()=>{
    
    fetch(`https://v6.exchangerate-api.com/v6/af956424b863d8bbad7e64e6/latest/${sel1.value}`).then(res=>res.json().then(data=>{
        const a = inp1.value*data.conversion_rates[sel2.value];
        inp2.value=a;
}))
}
btn.addEventListener("click",aaa);