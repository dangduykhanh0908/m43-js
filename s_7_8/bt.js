
const getElement = (selector) => document.querySelector(selector);

let form_insert = getElement("#form_insert");

let button = document.createElement("button");
button.textContent= "+";
button.classList.add("btn");
button.id = "btn-nut";
form_insert.appendChild(button);
count = getElement("#count");

let a = 0;
 button.onclick = function (e) {
    a++;
    count.textContent = a;
    e.preventDefault();
    addsv();
}



let addsv = () => {
    const div = document.createElement("div");
    div.id = a;
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.gap = "6px";
    form_insert.appendChild(div);
    const svid = document.createElement("p");
    svid.textContent= a;
    div.appendChild(svid);
    const tensv = document.createElement("input");
    tensv.type="text";
    tensv.id = "hovaten" + a ;
    tensv.classList.add("hovaten");
    tensv.placeholder="họ và tên";
    div.appendChild(tensv);
    const date = document.createElement("input");
    date.type="date";
    date.name="date";
    div.appendChild(date);
    const phone = document.createElement("input");
    phone.type="text";
    phone.id = "phon"+a;
    phone.classList.add("phone");
    phone.placeholder = "số điện thoại"
    div.appendChild(phone);
    
    let btn = document.createElement("button");
    btn.id = "btn-delete";
    btn.textContent="-";
    div.appendChild(btn);

    btn.onclick = function (e) {
    a--;
    e.preventDefault();
    div.remove();
    updateSTT();
}
}

function updateSTT() {
    let list = form_insert.querySelectorAll("div");
    let i = 1;

    list.forEach(div => {
        div.id = i;
        div.querySelector("p").textContent = i;
        const tensv = div.querySelector("input.hovaten");
        tensv.id = "hovaten" + i;
        const phone = div.querySelector("input.phone");
        phone.id = "phon" + i;

        i++;
    });
    a = list.length;
    count.textContent = a;
}






