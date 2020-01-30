import React from 'react'
import {connect} from 'react-redux'
import "./styles.css"
import ToggleImage from '../../assets/img/toggle.svg'
import { ReactSVG } from 'react-svg'
import { getMenu } from '../../redux/reducers/sidebar'

class Sidebar extends React.Component {
    state = {
        sidebar: true,
    }

    toggleSidebar = () => {
        this.setState({sidebar: !this.state.sidebar})
    }

    render() {
        const {sidebar} = this.state
        const {onClick, currentScreen, sidebarMenu} = this.props
        return(
            <div className={`sidebar ${!sidebar ? 'open' : ''} `}>
                <button onClick={this.toggleSidebar}>
                    <img src={ToggleImage} width="10" className={`sidebar_toggle-btn ${!sidebar ? 'open' : ''}`} alt="open" />
                </button>
                <ul className="sidebar_menu">
                    {sidebarMenu.map(_el => {
                        return <li className={`${currentScreen === _el.title ? 'active' : ''}`} key={_el.id}>
                                    <button onClick={() => onClick(_el.title)}>
                                        <ReactSVG src={_el.icon} className={`menu-svg ${currentScreen === _el.title ? 'active' : ''}`} />
                                        {!sidebar ? _el.title : ''}
                                    </button>
                                </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        sidebarMenu: getMenu(state)
    }),
    (dispatch) => ({

    })
)(Sidebar)