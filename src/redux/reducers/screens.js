
//CONSTANTS
export const SET_CURRENT_SCREEN = "SET_CURRENT_SCREEN"

const initialState = {
    currentScreen: 'Screen 1',
}

//REDUCERS
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_SCREEN: {
            return {
                ...state,
                currentScreen: action.payload 
            }
        }
        default: return state
    }
}


//ACTIONS
export const setCurrentScreen = (screen) => dispatch => {
    dispatch({
        type: SET_CURRENT_SCREEN,
        payload: screen
    })
}


// GETTERS
export const getCurrentScreen = (state) => state.screens && state.screens.currentScreen