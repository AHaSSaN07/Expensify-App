


const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOG_IN":
            return {
                id: action.id
            };
        case "LOG_OUT":
            return {};
        default:
            return state;
    }
}


export default authReducer;