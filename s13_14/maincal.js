const getElement = (selector) => document.querySelector(selector);

const btn = getElement(".his");
const display = getElement("#result");
const backspace = getElement("#backspace");
const historypanel = getElement(".history") 
const historyList = getElement("#historyList")

const btn1 = btn.onclick = () => {
    historypanel.classList.toggle("hiss");
}

function press(value) {
    display.value +=value;
    toggleBackspace();
}
function clearAll() {
  display.value = "";
  toggleBackspace();
}

function toggleBackspace() {
    if (display.value.length > 0) {
        backspace.classList.remove("hidden");
    } else {
        backspace.classList.add("hidden");
    }
}
function deleteOne() {
    display.value = display.value.slice(0, -1);
    toggleBackspace();
}

function calculate() {
    exp = display.value
    const kq =eval(exp);
    display.value = kq;

    let time = new Date().toLocaleTimeString();

    let item = {
        pheptinh: exp,
        ketqua: kq,
        time: time
    };
    saveHistory(item);
    hienthihistory(item);
}
const saveHistory = (item) => {
 let history = JSON.parse(localStorage.getItem("calHistory")) || [];
 history.push(item);
 localStorage.setItem("calHistory", JSON.stringify(history));
}

const hienthihistory = (item) => {
    let li = document.createElement("li");
      li.innerHTML = `
        <span>${item.pheptinh} = ${item.ketqua}</span>
        <small> (${item.time})</small>
    `;
    li.onclick = () => {
        display.value = item.pheptinh;
        toggleBackspace();
        btn1();
    }
    historyList.prepend(li);

}
window.onload = () => {
    const history = JSON.parse(localStorage.getItem("calHistory")) || [];
    history.forEach(item => hienthihistory(item));
};