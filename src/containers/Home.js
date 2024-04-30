import React, { useRef, useState } from "react"
import GameBoard from "./GameBoard"
import GameForm from "./GameForm"


const Home = () => {
    const [rowValues, setRowValues] = useState({
        0: ["", "", "", "", "", ""],
        1: ["", "", "", "", "", ""],
        2: ["", "", "", "", "", ""],
        3: ["", "", "", "", "", ""],
        4: ["", "", "", "", "", ""],    
    })
    const [rowClasses, setRowClasses] = useState({
        0: ["", "", "", "", "", ""],
        1: ["", "", "", "", "", ""],
        2: ["", "", "", "", "", ""],
        3: ["", "", "", "", "", ""],
        4: ["", "", "", "", "", ""],    
    })
    // const [inputFocus, setInputFocus] = useState([true, false, false, false, false])

    const [formData, setFormData] = useState({
        letterOne: "",
        letterTwo: "",
        letterThree: "",
        letterFour: "",
        letterFive: ""
    })

    const [currentRow, setCurrentRow] = useState(0)
    const [currentWord, setCurrentWord] = useState(["B", "L", "A", "D", "E"])
    const [outOfTurnsFlag, setOutOfTurnsFlag] = useState(false)

    const updateCellColors = (currentGuess) => {
        let updatedRowClasses = ["","","","",""]
        for(let i=0; i<currentWord.length; i++){
            if(currentWord[i] === currentGuess[i]){
                updatedRowClasses[i] = "letter-location-correct"
            }else if(currentWord.includes(currentGuess[i])){
                updatedRowClasses[i] = "letter-present"
            }
        }
        setRowClasses({...rowClasses, [currentRow]: updatedRowClasses})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let currentGuess = [formData.letterOne, formData.letterTwo, formData.letterThree, formData.letterFour, formData.letterFive]

        setRowValues({...rowValues, [currentRow]: currentGuess})
        setFormData({
            letterOne: "",
            letterTwo: "",
            letterThree: "",
            letterFour: "",
            letterFive: ""
        })
        if(currentRow === 4) setOutOfTurnsFlag(true)
        updateCellColors(currentGuess)
        setCurrentRow(currentRow+1)
    }

    return (
        <div>
            <h1>Wordly</h1>
                <GameBoard rowClasses={rowClasses} rowValues={rowValues} />
                <GameForm  formData={formData} handleSubmit={handleSubmit} setFormData={setFormData} outOfTurnsFlag={outOfTurnsFlag}/>
        </div>
    )
}

export default Home