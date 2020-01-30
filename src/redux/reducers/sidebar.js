import Menu1 from '../../assets/img/menu1.svg'
import Menu2 from '../../assets/img/menu2.svg'
import Menu3 from '../../assets/img/menu3.svg'
import Menu4 from '../../assets/img/menu4.svg'

//CONSTANTS
export const GET_MENU = "GET_MENU"

const initialState = {
    menu: [
        {
            id: 0,
            title: 'Screen 1',
            icon: Menu1,
        },
        {
            id: 1,
            title: 'Screen 2',
            icon: Menu2,
        },
        {
            id: 2,
            title: 'Screen 3',
            icon: Menu3,
        },
        {
            id: 3,
            title: 'Screen 4',
            icon: Menu4,
        },
    ]
}

//REDUCERS
export default (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}


// GETTERS
export const getMenu = (state) => state.sidebar && state.sidebar.menu