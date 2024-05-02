import React, { useRef, useState, useEffect, useCallback } from "react"
import Keyboard from "./Keyboard"

const GameFormRetro = ({formData, handleSubmit, setFormData, outOfTurnsFlag, rowValues, setRowValues, currentRow, element=window}) => {
    const {letterOne, letterTwo, letterThree, letterFour, letterFive} = formData
    const [inputDisabled, setInputDisabled] = useState([false, true, true, true, true])
    const [inputStyle, setInputStyle] = useState(["", "", "", "", ""])
    const [currentInput, setCurrentInput] = useState(0)
    const letterOneFocus = useRef()
    const letterTwoFocus = useRef()
    const letterThreeFocus = useRef()
    const letterFourFocus = useRef()
    const letterFiveFocus = useRef()

    useEffect(() => {
        handleFocus()
    }, [JSON.stringify(inputDisabled)])

    useEffect(() => {
        setRowValues({
            ...rowValues, [currentRow]: [letterOne, letterTwo, letterThree, letterFour, letterFive]
        })
    }, [formData])

    useEffect(() => {
        console.log("sjdhsjdh");
    }, [element])

    const onInputChange = (e) => {
        // console.log("Changed");
        // inputStyle[currentInput+1] = "letter-present"
        if(e.target.value.length > 0){

            if(currentInput < 4){
                inputDisabled[currentInput+1] = false
                inputDisabled[currentInput] = true
            }
            // console.log(currentInput);
            inputStyle[currentInput] = "letter-present"
            setCurrentInput(currentInput+1)
        }
        setFormData({
            ...formData, [e.target.name]: e.target.value.toUpperCase()
        })
        
        // onChange(e)
    }

    const handleKeyPress = (e) => {
        // console.log(e.target.value);
        if(e.keyCode === 8){

            inputDisabled[currentInput] = true
            inputDisabled[currentInput-1] = false
            inputStyle[currentInput] = ""
            // inputStyle[currentInput] = ""
            // console.log(currentInput);
            switch(currentInput){
                case 1:
                    setFormData({...formData, letterOne: ""})
                    inputStyle[0] = ""
                    break
                case 2:
                    setFormData({...formData, letterTwo: ""})
                    break
                case 3:
                    setFormData({...formData, letterThree: ""})
                    break 
                case 4:
                    setFormData({...formData, letterFour: ""})
                    break
            }
            
            setCurrentInput(currentInput-1)
        }else{
            console.log(e);
        }

    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(letterFive !== ""){
            setInputDisabled([false, true, true, true, true])
            setCurrentInput(0)
            setInputStyle(["", "", "", "", ""])
            handleSubmit(e)
        }else{
            handleFocus()
        }
    }

    const handleFocus = () => {
        switch(currentInput){
            case 0:
                letterOneFocus.current.focus()
                break
            case 1:
                letterTwoFocus.current.focus()
                break
            case 2:
                letterThreeFocus.current.focus()
                break
            case 3:
                letterFourFocus.current.focus()
                break
            case 4:
                letterFiveFocus.current.focus()
                break
        }
    }


    return (
        <div className="input-form-container">
            <form onSubmit={handleFormSubmit}>
                <fieldset disabled={outOfTurnsFlag}>
                {/* <button 
                    className="btn submit-attempt-btn" 
                    type="submit"
                    >Submit</button> <br /> */}
                <input 
                    type="text" 
                    name="letterOne" 
                    className={`letter-input ` + inputStyle[0]} 
                    maxLength="1" 
                    value={letterOne}
                    onChange={onInputChange}
                    autoFocus
                    ref={letterOneFocus}
                    disabled= {inputDisabled[0]}
                    />
                <input 
                    type="text" 
                    name="letterTwo" 
                    className={`letter-input ` + inputStyle[1]} 
                    maxLength="1" 
                    value={letterTwo}
                    onChange={onInputChange}
                    ref={letterTwoFocus}
                    onKeyUp={handleKeyPress}
                    disabled= {inputDisabled[1]}
                    />
                <input 
                    type="text" 
                    name="letterThree" 
                    className={`letter-input ` + inputStyle[2]}  
                    maxLength="1"
                    value={letterThree}
                    onChange={onInputChange} 
                    ref={letterThreeFocus}
                    onKeyUp={handleKeyPress}
                    disabled= {inputDisabled[2]}
                    />
                <input 
                    type="text" 
                    name="letterFour" 
                    className={`letter-input ` + inputStyle[3]} 
                    maxLength="1"
                    value={letterFour} 
                    onChange={onInputChange}
                    ref={letterFourFocus}
                    onKeyUp={handleKeyPress}
                    disabled= {inputDisabled[3]}
                    />
                <input 
                    type="text" 
                    name="letterFive" 
                    className={`letter-input ` + inputStyle[4]}  
                    maxLength="1" 
                    value={letterFive}
                    onChange={onInputChange}
                    ref={letterFiveFocus}
                    onKeyUp={handleKeyPress}
                    disabled= {inputDisabled[4]}
                    />
                    <Keyboard />
                <button 
                    className="btn submit-attempt-btn" 
                    type="submit"
                >Submit</button>
                    </fieldset>
            </form>
        </div>
    )
}

export default GameFormRetro