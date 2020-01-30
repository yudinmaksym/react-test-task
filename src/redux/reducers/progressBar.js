
import {setCurrentScreen} from './screens'

//CONSTANTS
export const SET_CURRENT_STEP = "SET_CURRENT_STEP"
export const UPDATE_STEPS = "UPDATE_STEPS"

const initialState = {
    currentStep: 0,
    status: ['default','in-progress', 'done'],
    steps: [
        {
            id: 0,
            title: "Step 1",
            ref: 'Screen 1',
            status: 'in-progress',
        },
        {
            id: 1,
            title: "Step 2",
            ref: 'Screen 2',
            status: '',
        },
        {
            id: 2,
            title: "Step 3",
            ref: 'Screen 3',
            status: '',
        },
        {
            id: 3,
            title: "Step 4",
            ref: 'Screen 4',
            status: '',
        }
    ]
}

//REDUCERS
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_STEP: {
            return {
                ...state,
                currentStep: action.payload 
            }
        }
        case UPDATE_STEPS: {
            return {
                ...state,
                steps: action.payload
            }
        }
        default: return state
    }
}


//ACTIONS
export const setCurrentStep = (step) => dispatch => {
    dispatch({
        type: SET_CURRENT_STEP,
        payload: step
    })
}

export const updateStep = (array, id) => dispatch => {
    const updatedArray = array.map(item => {
        if(item.id === id) {
            item.status = "done"
        } else if(item.id === id + 1) {
            item.status = "in-progress"
            dispatch(setCurrentScreen(item.ref))
        }
        return item
    })

    if(id < array.length) {
        dispatch({
            type: UPDATE_STEPS,
            payload: updatedArray
        })
        dispatch(setCurrentStep(id+1))
    }
}


// GETTERS
export const getCurrentStep = (state) => state.progressBar && state.progressBar.currentStep
export const getSteps = (state) => state.progressBar && state.progressBar.steps