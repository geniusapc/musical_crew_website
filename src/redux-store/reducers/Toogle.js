// const state = [

// ];

const Toogle = (state = true, action) => {
    switch (action.type) {
        case "TOOGLE":
            return state == !true;
        default:
            return state;
    }
};

export default Toogle;