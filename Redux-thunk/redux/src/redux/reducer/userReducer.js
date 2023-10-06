
const userReducer = (users = [], action) => {
    const {payload, type} = action;
    switch (type) {
        case "get_all":
            return payload;
        default:
            return users;
    }
}


export default userReducer;