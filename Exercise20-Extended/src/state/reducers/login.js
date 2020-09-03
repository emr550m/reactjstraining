var initialState = {
    welcomeMessage: "Welcome To App",
    username: ""  
};

export const ACTIONS = {
    SET_WELCOME_MESSAGE: "SET_WELCOME_MESSAGE",
    SET_USERNAME: "SET_USERNAME" 
}

export function login(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.SET_WELCOME_MESSAGE:
            return Object.assign({}, state, { welcomeMessage: action.welcomeMessage });
        case ACTIONS.SET_USERNAME:
            return Object.assign({}, state, { username: action.username }); 
        default:
            return state;
    }
}

