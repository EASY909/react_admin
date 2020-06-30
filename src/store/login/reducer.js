import * as actionTypes from "./constants";

const defaultState = {
    isCollapse: JSON.parse(sessionStorage.getItem("isCollapse")) || false,
}
const set_iscollapse=(state)=>{
    let isCollapse=!state.isCollapse;
    sessionStorage.setItem("isCollapse", JSON.stringify(isCollapse));
    return {
        isCollapse:isCollapse
    }
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_COLLAPSE:
            return set_iscollapse(state);
        default:
            return state;
    }
}