const Toogle = (state = true, action) => {
    switch (action.type) {
        case "TOOGLE":
            return state == !true;
        case "CLOSE":
            return state == !false;
        default:
            return state;
    }
};

export default Toogle;