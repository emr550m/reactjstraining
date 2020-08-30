var initialState = {
    appTitle: "App Name",
    appVersion: "1.0",
    logIn: false
}
export function dashboard(state = initialState, action) {
    switch (action.type) {
        case "SET_APP_TITLE":
            return Object.assign({}, state, {
                appTitle: action.appTitle
            })
        case "SET_APP_VERSION":
            return Object.assign({}, state, {
                appVersion: action.appVersion
            })
        case "SET_LOG_IN":
            return Object.assign({}, state, {
                logIn: action.logIn
            })
        case "CLEAR_LOGIN":
            return Object.assign({}, state, {
                logIn: false
            })
        default:
            return state
    }
}