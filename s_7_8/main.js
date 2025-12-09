
const toggleVis = evt => {
    const h2 = evt.currentTarget;
    const div = h2.nextElementSibling;

    h2.classList.toggle("minus");
    div.classList.toggle("open");

    evt.preventDefault();   //CHAN SU KIEN
}

 const h2s = document.querySelectorAll('#faqs h2');
    
    for (let h2 of h2s){
        h2.onclick = toggleVis;
    }

 h2s[0].firstChild.focus();
