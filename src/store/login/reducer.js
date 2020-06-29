import * as actionTypes from "./constants";

const defaultState = {
    isCollapse: JSON.parse(sessionStorage.getItem("isCollapse")) || false,
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_COLLAPSE:
            return { isCollapse: !state.isCollapse };
        default:
            return state;
    }
}