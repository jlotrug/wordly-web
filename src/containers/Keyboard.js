import { useEffect, useState } from 'react'
import backspaceimg from '../backspaceimg.svg'

const Keyboard = ({allLettersTried, setFormData, formData}) => {
    const [rowOne, setRowOne] = useState(["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"])
    const [rowTwo, setRowTwo] = useState(["A", "S", "D", "F", "G", "H", "J", "K", "L"])
    const [rowThree, setRowThree] = useState(["Z", "X", "C", "V", "B", "N", "M"])
    const [validLetters, setValidLetters] = useState(allLettersTried.validLetters)
    const [invalidLetters, setInvalidLetters] = useState(allLettersTried.invalidLetters)

    useEffect(() => {
        setValidLetters(allLettersTried.validLetters)
        setInvalidLetters(allLettersTried.invalidLetters)
        // console.log(allLettersTried);
    }, [allLettersTried])




    return (
        <div className="keyboard-container">
            <div className="keyboard-row krow-1">
                {rowOne.map((el, index) => {
                    if(validLetters.includes(el)){
                        return <button key={index} className='keyboard-key letter-p'>{el}</button>
                    }else if(invalidLetters.includes(el)){
                        return <button key={index} className='keyboard-key letter-np'>{el}</button>
                    }else{
                        return <button key={index} className='keyboard-key'>{el}</button>
                    }
                })}
            </div>
            <div className="keyboard-row krow-2">
                {rowTwo.map((el, index) => {
                    if(validLetters.includes(el)){
                        return <button key={index} className='keyboard-key letter-p'>{el}</button>
                    }else if(invalidLetters.includes(el)){
                        return <button key={index} className='keyboard-key letter-np'>{el}</button>
                    }else{
                        return <button key={index} className='keyboard-key'>{el}</button>
                    }
                })}
            </div>
            <div className="keyboard-row krow-3">
                 {rowThree.map((el, index) => {
                    if(validLetters.includes(el)){
                        return <button key={index} className='keyboard-key letter-p'>{el}</button>
                    }else if(invalidLetters.includes(el)){
                        return <button key={index} className='keyboard-key letter-np'>{el}</button>
                    }else{
                        return <button key={index} className='keyboard-key'>{el}</button>
                    }
                })}
                 {/* <button className="keyboard-key spec-key"> <img src={backspaceimg} alt="" width="30px" height="30px"/> </button> */}
            </div>            
        </div>
       
    )
}

export default Keyboard