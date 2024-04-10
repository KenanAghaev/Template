// function pulsayi(say) {
//     let pullar = [500, 200, 100, 50, 20, 10, 5, 1];
//     let pulmiqdari = {};

//     for (let pul of pullar) {
//         let miqdar = Math.floor(say / pul);
//         pulmiqdari[pul] = miqdar;
//         say %= pul;
//     }

//     return pulmiqdari;
// }


// let say = 1234;
// let pulmiqdari = pulsayi(say);
// console.log(pulmiqdari);

function pulsayi(say) {
    let pullar = [500, 200, 100, 50, 20, 10, 5, 1];
    let pulmiqdari = {};

    for (let pul of pullar) {
        if (say >= pul) {
            let miqdar = Math.floor(say / pul);
            pulmiqdari[pul] = miqdar;
            say %= pul;
        }
    }

    return pulmiqdari;
}

document.getElementById("btn").addEventListener("click", function() {
    let say = document.getElementById("say").value;
    let pulmiqdari = pulsayi(Math.floor(say));
    let resaultHTML = "<ul>";
    for (let pul in pulmiqdari) {
        let sekil = pul + ".jpg";
        resaultHTML += "<li><img src='" + sekil + "' alt='" + pul + "'>X " + pulmiqdari[pul] + "</li>";
    }
    resaultHTML += "</ul>";
    document.getElementById("netice").innerHTML = resaultHTML;
});
