const MusicListReducer = (
    state = [
        { id: 1, title: "new song for the soul", duration: "4:52" },
        { id: 2, title: "new song for the soul", duration: "4:52" },
        { id: 3, title: "new song for the soul", duration: "4:52" },
        { id: 4, title: "new song for the soul", duration: "4:52" },
        { id: 5, title: "new song for the soul", duration: "4:52" },
        { id: 6, title: "new song for the soul", duration: "4:52" },
        { id: 7, title: "new song for the soul", duration: "4:52" },
        { id: 8, title: "new song for the soul", duration: "4:52" }
    ],
    action
) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: Math.random(0, 100), text: "mike", title: "new boi enter", duration: "3:45" }];
        case "GET_ID":
            return state.filter((st) => st.id !== action.payload ? st : null);
        default:
            return state;
    }
};

export default MusicListReducer;