import { useState, useRef } from "react"

const FormRow = ({outOfTurnsFlag, rowClasses, rowValues}) => {
    const [inputDisabled, setInputDisabled] = useState([false, true, true, true, true])
    const [inputStyle, setInputStyle] = useState(["", "", "", "", ""])
    const [currentInput, setCurrentInput] = useState(0)
    const letterOneFocus = useRef()
    const letterTwoFocus = useRef()
    const letterThreeFocus = useRef()
    const letterFourFocus = useRef()
    const letterFiveFocus = useRef()
    const [formData, setFormData] = useState({
        letterOne: "",
        letterTwo: "",
        letterThree: "",
        letterFour: "",
        letterFive: ""
    })
    const {letterOne, letterTwo, letterThree, letterFour, letterFive} = formData

    const handleFormSubmit = () => {

    }

    const onInputChange = () => {

    }

    const handleKeyPress = () => {
        console.log("Hello");
    }

    return (
        <tr className="table-row">
            <td 
                className={`attempt-cell ` + rowClasses[0][0]}
                onKeyUp={handleKeyPress}
            >
            <input
                className="letter-input"
            >
            </input></td>
            <td className={`attempt-cell ` + rowClasses[0][1]}>{rowValues[0][1]}</td>
            <td className={`attempt-cell ` + rowClasses[0][2]}>{rowValues[0][2]}</td>
            <td className={`attempt-cell ` + rowClasses[0][3]}>{rowValues[0][3]}</td>
            <td className={`attempt-cell ` + rowClasses[0][4]}>{rowValues[0][4]}</td>
        </tr>
         
    )
}

export default FormRow