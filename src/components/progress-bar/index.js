import React from 'react'
import './styles.css'

const ProgressBar = ({steps}) => {
    return(
        <div className="progress">
            {steps.map(_step => {
                return  <div className={`progress_item ${_step.status}`} key={_step.id} data-title={`${_step.title}`}>
                            <div className={`progress_item__step ${_step.status}`}>
                                {_step.id + 1}
                            </div>
                        </div>
            })}
        </div>
    )
}

export default ProgressBar