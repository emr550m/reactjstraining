
console.log("Hello from Javascript!");

var car = {
    brand: "Fiat",
    model: "500L",
    color: "white",
    model: 2012,
    getAge:function(){
        return new Date().getFullYear()-this.model
    }
};
console.log(car);
car.getAge2 = function(){
    return new Date().getFullYear()-this.model
}

console.log(car.getAge2());

//------
console.log("Lexical Scope Test:");
let carAge=5
function getCarAge(){
    let carAge=3;
    console.log(carAge);
    if(carAge==3){
        let carAge=6;
        console.log(carAge);
    }
    console.log(carAge);
}

getCarAge() 
console.log(carAge);

//----------
console.log("Full Scope Test:");
var carAge2=5
function getCarAge2(){
    var carAge2=3;
    console.log(carAge2);
    if(carAge2==3){
        var carAge2=6;
        console.log(carAge2);
    }
    console.log(carAge2);
}

getCarAge2() 
console.log(carAge2);