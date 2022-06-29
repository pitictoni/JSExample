
function f(){
const t = document.getElementById('results');
    for(const name of document.location.href.split('?')[1].split('&')){
    const p = document.createElement("p");
    p.innerHTML = name;
    t.appendChild(p);
}
}

window.onload = (event) => {
    f();
};