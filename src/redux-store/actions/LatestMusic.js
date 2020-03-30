const LatestMusic = () => {
    return {
        type: "ADD",

    }
};

export const GetSpecificID = (id) => {
    return {
        type: "GET_ID",
        payload: id,
    }
};

export default LatestMusic;