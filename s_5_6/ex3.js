function sapxepten() {
    let n= Number(prompt("nhap so luong ten"));
    let names = [];

    for(let i=0;i<n;i++){
        let name = prompt(`nhap ten thu ${i+1}:`);
        names.push(name);
    }

    names.sort();

    console.log("danh sach sau sap xep");
    for(i=0;i<names.length;i++){
        console.log(names[i]);
    }
}

sapxepten();