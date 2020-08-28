var Math =require("./src/math");

var m = new Math();

m.OnlineAdd(2,4).then((sum)=>{
    console.log(sum)
}).catch((err)=>{
    console.log(err)
})