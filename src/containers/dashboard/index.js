import React from 'react'
import {connect} from 'react-redux'
import Sidebar from '../../components/sidebar'
import './styles.css'
import ProgressBar from '../../components/progress-bar'
import SubmitForm from '../../components/submit-form'
import {
    setCurrentStep,
    getCurrentStep,
    updateStep,
    getSteps,
} from '../../redux/reducers/progressBar'
import Screen1 from '../../components/screens/Screen1'
import Screen2 from '../../components/screens/Screen2'
import Screen3 from '../../components/screens/Screen3'
import Screen4 from '../../components/screens/Screen4'
import { getCurrentScreen, setCurrentScreen } from '../../redux/reducers/screens'

class Dashboard extends React.Component {
    handleSubmit = () => {
        const {steps, currentStep} = this.props;
        this.props.updateStep(steps, currentStep)
    }

    renderScreens(currentPage) {
        switch(currentPage) {
            case 'Screen 1': {
                return <Screen1 />
            }
            case 'Screen 2': {
                return <Screen2 />
            }
            case 'Screen 3': {
                return <Screen3 />
            }
            case 'Screen 4': {
                return <Screen4 />
            }
            default: return <Screen1 />
        }
    }

    setScreen = (screen) => {
        this.props.setCurrentScreen(screen)
    }
    
    render() {
        const {steps, currentScreen} = this.props
        return(
            <div className="container">
                <div className="dashboard">
                    <Sidebar 
                        onClick={this.setScreen}
                        currentScreen={currentScreen}
                    />
                    <div className="dashboard_container">
                        <ProgressBar 
                            steps={steps}
                        />
                        {this.renderScreens(currentScreen)}
                        <SubmitForm 
                            submit={this.handleSubmit}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        currentStep: getCurrentStep(state),
        steps: getSteps(state),
        currentScreen: getCurrentScreen(state),
    }),
    (dispatch) => ({
        setCurrentStep: () => dispatch(setCurrentStep()),
        updateStep: (array, step) => dispatch(updateStep(array, step)),
        setCurrentScreen: (screen) => dispatch(setCurrentScreen(screen))
    })
)(Dashboard)