import actionTypes from "../actions/actionType";


const initState = {
    // homeData : [],
    // test: "hi"
    banner: []
}
const appReducer = (state = initState, action) =>{
    switch (action.type) {
        case actionTypes.GET_HOME:
            // return state
            console.log(action);
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionType === 'banner')?.items || null
            }
    
        default:
            return state
    }

}

export default appReducer