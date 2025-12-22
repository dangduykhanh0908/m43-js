class Employee {
    #salary;
    constructor(salary){
        this.#salary = salary;
    }
    Getter(){
        return this.#salary;
    }
    Setter(value){
        if(value>0){
            this.#salary= value;
        } else {
            console.log("luong khong the am");
            
        }
    }
}

class Develop extends Employee {
    constructor(salary,language){
        super(salary);
        this.language = language;
    }
}

class Manager extends Employee {
    constructor(salary,teamZise) {
        super(salary);
        this.teamZise = teamZise;
    }
}