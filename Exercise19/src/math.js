const axios = require('axios').default;

class Math {
    Add(a, b) {
        return a + b;
    }
    Subtract(a, b) {
        return a - b;
    }
    Eval(a, b) {
        return (a > b);
    }
    AddOrSubtract(a, b, op) {
        var operation = (op ? "add" : "subtract");
        if (operation === "add") {
            var returnVal = this.Add(a, b);
            returnVal = returnVal * 2;
            returnVal -= this.Subtract(a, b)
            return returnVal;
        }
        if (operation === "subtract") {
            var returnVal = this.Subtract(a, b);
            returnVal = returnVal * 2;
            returnVal -= this.Add(a, b)
            return returnVal;
        }
    }
    OnlineAdd(a,b) {
        return new Promise((resolve, reject) => {
            const axios = require('axios').default;
            axios.post("http://localhost:8090/api/add", {
                a, b
            }).then((res) => {
                if(res.data.success){
                    resolve(res.data.sum)
                }else{
                    reject(res.data.message)
                } 
            }).catch((res) => {
                reject(res)
            })
        })
    }
}
module.exports = Math;