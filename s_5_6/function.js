function nhapso(massge, value) {
    let num = NaN;
    do {
        num = Number(prompt(massge, value));
    } while(isNaN(num));
    return num;
}

function tinhlai(sotien, sonam , laisuat){
    let tongtien = sotien;
    for(let i=0 ; i<=sonam;i++){
        tongtien += tongtien*laisuat/100;
    }
    return tongtien;
}

const sotien = nhapso("nhap so tien" , 10000);
const sonam = nhapso("nhap so nam" , 5);
const laisuat = nhapso("ti suat lai" , 3.5);
const tienlai = tinhlai(sotien, sonam ,laisuat);
alert(`tong tien sau khi tinh lai ${tienlai.toFixed(2)}`);
