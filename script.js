function toggle(x) {
    let img = document.querySelector(".toggle-img");
    if (x.style.display === "none") {
        x.style.display = "block";
        img.style.transform = 'rotate(0deg)';
      } else {
        x.style.display = "none";
        img.style.transform = 'rotate(180deg)';
      }
}


let pointer01 = document.querySelector(".pointer-01");
let pointer02 = document.querySelector(".pointer-02");
let pointer03 = document.querySelector(".pointer-03");
let elmt01 = document.querySelector(".element-01");
let elmt02 = document.querySelector(".element-02");
let elmt03 = document.querySelector(".element-03");


pointer01.onclick = function() {
    toggle(elmt01);
};

pointer02.onclick = function() {
    toggle(elmt02);
};

pointer03.onclick = function() {
    toggle(elmt03);
};

