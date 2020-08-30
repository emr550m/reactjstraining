var initialState = {
    welcomeMessage: "Welcome App User",
    username: "",
    password: "",
    btnDisabled: true
}
export function home(state = initialState, action) {
    switch (action.type) {
        case "SET_WELCOME_MESSAGE":
            return Object.assign({}, state, {
                welcomeMessage: action.welcomeMessage
            })
        case "SET_USERNAME":
            return Object.assign({}, state, {
                username: action.username,
                btnDisabled: !(state.password.length > 0 && action.username.length > 0)
            })
        case "SET_PASSWORD":
            return Object.assign({}, state, {
                password: action.password,
                btnDisabled: !(state.username.length > 0 && action.password.length > 0)
            })
        case "SET_BTN_DISABLED":
            return Object.assign({}, state, {
                btnDisabled: action.btnDisabled
            })
        case "CLEAR_LOGIN":
            return Object.assign({}, state, {
                password: "", username:""
            })
        default:
            return state
    }
}