import React, { useRef, useState } from "react"
import GameBoard from "./GameBoard"
import GameForm from "./GameForm"
import GameFormRetro from "./GameFormRetro"
import CurrentMatches from "./CurrentMatches"


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
    const [currentMatches, setCurrentMatches] = useState(["?", "?", "?", "?", "?"])
    const [allWords, setAllWords] = useState(["BLADE", "SPIKE", "STRAY", "TRADE"])

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
    const [gameOverMessage, setGameOverMessage] = useState("")

    const updateCellColors = (currentGuess) => {
        let updatedRowClasses = ["","","","",""]
        let matches = 0;
        for(let i=0; i<currentWord.length; i++){
            if(currentWord[i] === currentGuess[i]){
                updatedRowClasses[i] = "letter-location-correct"
                currentMatches[i] = currentGuess[i]
                matches++;
            }else if(currentWord.includes(currentGuess[i])){
                updatedRowClasses[i] = "letter-present"
            }
        }
        setRowClasses({...rowClasses, [currentRow]: updatedRowClasses})
        if(matches === 5){
            setOutOfTurnsFlag(true)
            setGameOverMessage("Good Job! The word was " + currentWord.join(""))
        }
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
            if(currentRow === 4){
                setOutOfTurnsFlag(true)
                setGameOverMessage("Sorry! The word was " + currentWord.join(""))
            } 
            updateCellColors(currentGuess)
            setCurrentRow(currentRow+1)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md match-col">
                    <div className="current-matches">
                        <CurrentMatches currentMatches={currentMatches}/>
                    </div>
                </div>
                <div className="col-md play-column">
                    <h1>Wordly</h1>
                        <GameBoard rowClasses={rowClasses} rowValues={rowValues} />
                        
                        <GameForm  
                            formData={formData} 
                            handleSubmit={handleSubmit} 
                            setFormData={setFormData} 
                            outOfTurnsFlag={outOfTurnsFlag}
                            allWords={allWords}
                            gameOverMessage={gameOverMessage}
                        />
                </div>
                <div className="col-md"></div>
            </div>
        </div>
    )
}

export default Home