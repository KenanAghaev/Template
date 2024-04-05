let count = 1;
let katalizator = true;

const btn = document.getElementById("btn"); 
btn.addEventListener("click", () => {
    if (katalizator) {
        btn.textContent = `Click ${count}`;
        if (count < 10) {
            count++;
            if(count===10){
             katalizator = !katalizator;   
            }
        } 
        
    } else {
        btn.textContent = `Click ${count}`;
        if (count > 1) {
            count--;
            if(count===1){
               katalizator = !katalizator; 
            }
        } 
    }
});
