import React, {useState, useRef} from 'react'
import './styles.css'

const SubmitForm = ({submit}) => {
    const [checked, setChecked] = useState(false)
    const terms = useRef()

    return(
        <div className="submit-form">
            <div>
                <input 
                    type="checkbox" 
                    ref={terms}
                    onChange={() => setChecked(terms.current.checked)}
                />
                I agree to the Terms and Conditions
            </div>
            <button 
                onClick={submit}
                disabled={!checked}
                className="submit-form_btn"
            >
                Dispatch
            </button>
        </div>
    )
}

export default SubmitForm