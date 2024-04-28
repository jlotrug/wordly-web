import { useState } from "react"
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

    const [formData, setFormData] = useState({
        letterOne: "",
        letterTwo: "",
        letterThree: "",
        letterFour: "",
        letterFive: ""
    })

    // const {letterOne, letterTwo, letterThree, letterFour, letterFive} = formData
    const [currentRow, setCurrentRow] = useState(0)
    const [currentWord, setCurrentWord] = useState(["B", "L", "A", "D", "E"])

    const updateCellColors = (currentGuess) => {
        let updatedRowClasses = ["","","","",""]
        for(let i=0; i<currentWord.length; i++){
            if(currentWord[i] === currentGuess[i]){
                updatedRowClasses[i] = "letter-location-correct"
            }else if(currentWord.includes(currentGuess[i])){
                console.log("Logic Works");
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
        updateCellColors(currentGuess)
        setCurrentRow(currentRow+1)
    }

    const onChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value.toUpperCase()
        })
    }

    return (
        <div>
            <h1>Wordly</h1>
                <GameBoard rowClasses={rowClasses} rowValues={rowValues} />
                <GameForm onChange={onChange} formData={formData} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Home