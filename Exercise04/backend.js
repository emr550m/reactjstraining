const backendURL = "https://www.someurl.com"
function getBackendAPIUrl(){
    return backendURL +    "/"  + "api";
}
module.exports = {
    backendURL,
    getBackendAPIUrl
}