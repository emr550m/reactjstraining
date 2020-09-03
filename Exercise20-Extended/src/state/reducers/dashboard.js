var initialState = {
    appTitle: "My App Name",
    appVersion: 1.2,
    logIn: false
};

export function dashboard(state = initialState, action) {
    switch (action.type) {
        case "SET_APP_TITLE":
            return Object.assign({}, state, { appTitle: action.appTitle });
        case "SET_APP_VERSION":
            return Object.assign({}, state, { appVersion: action.appVersion });
        case "SET_LOG_IN":
            return Object.assign({}, state, { logIn: action.logIn });
        default:
            return state;
    }
}

