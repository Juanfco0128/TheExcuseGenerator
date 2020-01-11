window.onload=()=>{
    generateRandom();
}

function generateRandom(){

    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let o = Math.floor(Math.random() * who.length);
let t = Math.floor(Math.random() * what.length);
let n = Math.floor(Math.random() * when.length);


document.querySelector('#body').innerHTML = who[o,t,n];

}