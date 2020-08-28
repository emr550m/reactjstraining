var initialState = {
    welcomeMessage: "Welcome App User"
}
export function home(state = initialState, action) {
    switch (action.type) {
        case "SET_WELCOME_MESSAGE":
            return Object.assign({}, state, {
                welcomeMessage: action.welcomeMessage
            }) 
        default:
            return state
    }
}