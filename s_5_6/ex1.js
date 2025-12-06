const arr =[];

for (i=0;i<5;i++){
    arr.push(prompt("nhap gia tri cho mang"));
}
let array1 = arr.map(Number); 



function timso(){
    const x = Number(prompt("nhap so: "));
    if(array1.includes(x)){
        document.writeln("co so nay trong mang"+ "\n");
    } else {
        document.writeln(" ko co so nay trong mang" + "\n");
    }
}


 function gtln() {
    let gtln1 = array1[0];
    for(let i=1 ; i<array1.length; i++) {
        if (array1[i] > gtln1 ){
             gtln1 = array1[i];
        } 
    };
    return gtln1;
 }


function tongmang()
{
    let  sum = 0;
    for( let i =0; i<array1.length;i++ ) {
        sum += array1[i];
    }
    return sum;
}


function sapxep() {
    for (i=0 ;i<array1.length-1; i++){
        for(j=0;j<array1.length-1-i;j++){
            if(array1[j]<array1[j+1]){
                [array1[j],array1[j+1]]=[array1[j+1],array1[j]];
            }
        }
    }
    return array1;
}



//menu 

const num = Number(prompt("nhap so"));
switch(num){
    case 1:
        console.log("mang sau khi nhap " + "\n" + array1);
        break;
    case 2:
        console.log(timso());    
        break;
    case 3:
         console.log(gtln());
         break;    
}













