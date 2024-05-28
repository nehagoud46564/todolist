let r = document.getElementById("con");
let add = document.getElementById("add");
let zzzz = document.getElementById("zzzz");

function getarray() {
    let mo = localStorage.getItem("array");
    if (mo === null) {
        return [];
    } else {
        return JSON.parse(mo);
    }
}
let array = getarray();
let s = document.getElementById("savebtn");
s.onclick = function() {
    localStorage.setItem("array", JSON.stringify(array));
}

function fun2(iid, lid) {
    let y = document.getElementById(iid);
    let yy = document.getElementById(lid);
    if (y.checked === true) {
        yy.classList.add("checked");
    } else {
        yy.classList.remove("checked");
    }
}

function fun(z) {
    let c = document.createElement("div");
    c.classList.add("d-flex", "flex-row")
    r.appendChild(c);

    let i = document.createElement("input");
    i.id = "mycheckbox" + z.no;
    let iid = i.id;
    i.type = "checkbox";
    i.classList.add("i");
    i.onclick = function() {
        fun2(i.id, l.id);
    }
    c.appendChild(i);

    let c2 = document.createElement("div");
    c2.classList.add("c2", "d-flex", "flex-row");
    c.appendChild(c2);



    let l = document.createElement("label");
    l.id = "lab" + z.no;
    let lld = l.id
    l.textContent = z.text;
    l.setAttribute("for", "mycheckbox" + z.no);
    c2.appendChild(l);

    let c3 = document.createElement("div");
    c3.classList.add("icc");
    c3.onclick = function() {
        r.removeChild(c);
        let pop = array.indexOf(z);
        array.splice(pop, 1);



    }
    c2.appendChild(c3);


    let ic = document.createElement("i");
    ic.classList.add("fas", "fa-trash");
    c3.appendChild(ic);




}

for (let z of array) {
    fun(z);
}

add.onclick = function() {
    let object = {
        text: zzzz.value,
        no: array.length + 1,
    };
    fun(object);
    array.push(object);
}
