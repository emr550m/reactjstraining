var initialState = {
    appTitle: "App Name",
    appVersion: "1.0",
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
        default:
            return state
    }
}