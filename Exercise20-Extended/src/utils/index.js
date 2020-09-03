import axios from "axios"

export function backend(api, reqObject) {
    return new Promise((resolve, reject) => {
        axios.post("http://localhost:8090" + api, reqObject).catch((err) => {
            reject(err);
        }).then((response) => {
            if (response && response.data) {
                if(response.data.success){
                    resolve(response.data);
                }else{
                    reject("Backend Error");
                }
            } else {
                reject("No Body Found");
            }
        })
    });
}