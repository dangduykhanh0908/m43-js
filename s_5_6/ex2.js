let m = Number(prompt("nhap so:"));
let n = Number(prompt("nhap so:"));
let arr = [];



function nhapmang () {
    for ( let i=0 ;i< m ;i++){
          arr [i] = [] ; 
        for( let j=0;j<n;j++) {
            arr[i][j] = Number(prompt(`nhap phan tu [${i}][${j}]:`));
        }
    }
    return arr;
}

console.log(nhapmang());
let arr1 = arr.map(row => row.map(Number));


 function tongmang() {
    let sum = 0 ;
    for(let i=0 ;i< m ;i++){
        for(let j=0;j<n;j++){
            sum+= arr[i][j];
        }
    }
    return sum;
 }




 function timso(){
    const x = Number(prompt("nhap so can tim:"));
    for(let i=0 ;i<m;i++){
        for(let j=0;j<n;j++){
            if(arr1[i][j]===x){
                console.log("so can tim co trong mang");
                return;
            }
        }
    }
    console.log("khong tim thay trong mang");
 }



function sapxep(arr){
    let temp = arr.flat().sort((a,b) => a-b);
    let index=0;
    for(let i=0 ; i<arr1.length;i++) {
        for(let j=0;j<arr[i].length;j++){
            arr[i][j]=temp[index++];
        }
    }
    return arr;
}

let luaChon = Number(prompt(
    "1. Tổng mảng\n2. Tìm số\n3. Mảng sắp sếp\nNhập lựa chọn:"
));
switch(num){
    case 1 :
        console.log("tong mang "+tongmang(arr1));
        break;
    case 2 :
        console.log(timso());
        break; 
    case 3 :
        console.log("mang sau xap sep "+sapxep(arr1));
        break; 

    default:
        console.log("Lựa chọn không hợp lệ!");
}









