import { useEffect, useState } from 'react'
import backspaceimg from '../backspaceimg.svg'

const Keyboard = ({allLettersTried, setFormData, formData, updateLetterValue, outOfTurnsFlag}) => {
    const [rowOne, setRowOne] = useState(["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"])
    const [rowTwo, setRowTwo] = useState(["A", "S", "D", "F", "G", "H", "J", "K", "L"])
    const [rowThree, setRowThree] = useState(["Z", "X", "C", "V", "B", "N", "M"])
    const [validLetters, setValidLetters] = useState(allLettersTried.validLetters)
    const [invalidLetters, setInvalidLetters] = useState(allLettersTried.invalidLetters)
    const [typedLetter, setTypedLetter] = useState("")

    useEffect(() => {
        setValidLetters(allLettersTried.validLetters)
        setInvalidLetters(allLettersTried.invalidLetters)
    }, [allLettersTried])

    useEffect(() => {
        // updateLetterValue(typedLetter)
        validateUserInput(typedLetter.toUpperCase())
        setTypedLetter("")
    }, [typedLetter])

    const userTyped = ( e => {
        // console.log("Reache");
        setTypedLetter(e.key)
    })

    const validateUserInput = (userInput) => {
        if((userInput === "BACKSPACE" || userInput === "ENTER") || (userInput.length === 1 && userInput.match(/[a-z]/i) )){
            updateLetterValue(userInput)
        }

    }

    useEffect(() => {
        window.addEventListener("keydown", userTyped, false)

        return () => {
            window.removeEventListener("keydown", userTyped, false)
        }
    },[])

    const handleLetterSelect = (e) =>{
        // console.log(e.target.name);
        // updateLetterValue(e.target.name)
        setTypedLetter(e.target.name)
    }




    return (
        <div className={outOfTurnsFlag ? "hide-content" : "keyboard-container"}>
            <div className="keyboard-row krow-1">
                {rowOne.map((el, index) => {
                    if(validLetters.includes(el)){
                        return <button key={index} onClick={handleLetterSelect} name={el} className='keyboard-key letter-p'>{el}</button>
                    }else if(invalidLetters.includes(el)){
                        return <button key={index} onClick={handleLetterSelect} name={el}  className='keyboard-key letter-np'>{el}</button>
                    }else{
                        return <button key={index} onClick={handleLetterSelect} name={el}  className='keyboard-key'>{el}</button>
                    }
                })}
            </div>
            <div className="keyboard-row krow-2">
                {rowTwo.map((el, index) => {
                    if(validLetters.includes(el)){
                        return <button key={index} onClick={handleLetterSelect} name={el} className='keyboard-key letter-p'>{el}</button>
                    }else if(invalidLetters.includes(el)){
                        return <button key={index} onClick={handleLetterSelect} name={el} className='keyboard-key letter-np'>{el}</button>
                    }else{
                        return <button key={index} onClick={handleLetterSelect} name={el} className='keyboard-key'>{el}</button>
                    }
                })}
            </div>
            <div className="keyboard-row krow-3">
                <button onClick={handleLetterSelect} name="ENTER" className="keyboard-key spec-key"> Enter </button>
                 {rowThree.map((el, index) => {
                    if(validLetters.includes(el)){
                        return <button key={index} onClick={handleLetterSelect} name={el} className='keyboard-key letter-p'>{el}</button>
                    }else if(invalidLetters.includes(el)){
                        return <button key={index} onClick={handleLetterSelect} name={el} className='keyboard-key letter-np'>{el}</button>
                    }else{
                        return <button key={index} onClick={handleLetterSelect} name={el} className='keyboard-key'>{el}</button>
                    }
                })}
                 <button onClick={handleLetterSelect} name="BACKSPACE" className="keyboard-key spec-key"> <img name="Delete" src={backspaceimg} alt="" width="30px" height="27px"/> </button>
            </div>            
        </div>
       
    )
}

export default Keyboard