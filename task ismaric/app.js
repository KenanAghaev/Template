const main = document.getElementById('main');
const btn = document.getElementById('btn');
const message = document.getElementById('message');
func=()=>{
    let a = Math.floor(Math.random()*5+1);
    let b = Math.floor(Math.random()*1000000)
    const ismaric = document.createElement('div');
    ismaric.classList.add('ismaric');
    ismaric.textContent=`Message ${a}`
    message.append(ismaric);
    setTimeout(() => {
        message.lastChild.remove()
    }, 3000);
    ismaric.style.color=`#${b}`;
}
btn.addEventListener('click',func);

