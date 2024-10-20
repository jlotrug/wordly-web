import React, { useState, useEffect, useReducer } from "react"
import GameBoard from "./GameBoard"
import CurrentMatches from "./CurrentMatches"
import Keyboard from "./Keyboard"
import { FetchFiveLetterWordsReducer } from "../reducers/FetchFiveLetterWordsReducer"
import { FetchWords } from "../api/FetchWords"


const Home = () => {
    const [rowValues, setRowValues] = useState({
        0: ["", "", "", "", "", ""],
        1: ["", "", "", "", "", ""],
        2: ["", "", "", "", "", ""],
        3: ["", "", "", "", "", ""],
        4: ["", "", "", "", "", ""],
        5: ["", "", "", "", "", ""],      
    })
    const [rowClasses, setRowClasses] = useState({
        0: ["", "", "", "", "", ""],
        1: ["", "", "", "", "", ""],
        2: ["", "", "", "", "", ""],
        3: ["", "", "", "", "", ""],
        4: ["", "", "", "", "", ""],
        5: ["", "", "", "", "", ""],    
    })
    const [allLettersTried, setAllLettersTried] = useState({
        validLetters: [],
        invalidLetters: []
    })

    const [currentMatches, setCurrentMatches] = useState(["?", "?", "?", "?", "?"])
    const [allWords, dispatchAllWords] = useReducer(
        FetchFiveLetterWordsReducer, {words: [], isLoading: false, isError: false}
    )

    const [currentRow, setCurrentRow] = useState(0)
    const [currentInput, setCurrentInput] = useState(0)
    const [currentWord, setCurrentWord] = useState([])
    const [outOfTurnsFlag, setOutOfTurnsFlag] = useState(false)
    const [gameOverMessage, setGameOverMessage] = useState("")
    const [warnings, setWarnings] = useState("")

    useEffect(() => {
        FetchWords(dispatchAllWords, 5)

    }, [])

    useEffect(() => {
        updateCurrentWord()
        
    }, [allWords])

    const updateCurrentWord = () => {
        if(allWords.words.length > 0){
            let randomIndex = Math.floor(Math.random() * allWords.words.length)
            setCurrentWord(allWords.words[randomIndex].split(""))
        }
    }

    const updateCellColors = (currentGuess) => {
        let updatedRowClasses = ["","","","",""]
        let validLetters = []
        let invalidLetters = []
        let currentMatchCopy = currentMatches
        let matches = 0;
        for(let i=0; i<currentWord.length; i++){
            if(currentWord[i] === currentGuess[i]){
                updatedRowClasses[i] = "letter-location-correct"
                currentMatchCopy[i] = currentGuess[i]
                if(!validLetters.includes(currentGuess[i])) validLetters.push(currentGuess[i])
                matches++;
            }else if(currentWord.includes(currentGuess[i])){
                updatedRowClasses[i] = "letter-present"
                if(!validLetters.includes(currentGuess[i])) validLetters.push(currentGuess[i])
                validLetters.push(currentGuess[i])
            }else{
                if(!invalidLetters.includes(currentGuess[i])) invalidLetters.push(currentGuess[i])
            }
        }

        setCurrentMatches(currentMatchCopy)

        setAllLettersTried({
            validLetters: [...allLettersTried.validLetters, ...validLetters],
            invalidLetters: [...allLettersTried.invalidLetters, ...invalidLetters]
        
        })

        setRowClasses({...rowClasses, [currentRow]: updatedRowClasses})
        if(matches === 5){
            setOutOfTurnsFlag(true)
            setGameOverMessage("Good Job! The word was " + currentWord.join(""))
        }
    }

    const updateLetterValue = (letter) => {
        let currentGuess = rowValues[currentRow]
        if(letter === "BACKSPACE"){
            setWarnings("")
            if(currentInput > 0){
                setCurrentInput(currentInput-1)
                currentGuess[currentInput-1] = ""
                setRowValues({...rowValues, [currentRow]: currentGuess})
            }
        }else if(letter === "ENTER"){
            if(rowValues[currentRow][4] !== ""){
                handleSubmit(currentGuess)
            }
            
        }else{
            if(currentInput < 5){
                currentGuess[currentInput] = letter
                setRowValues({...rowValues, [currentRow]: currentGuess})
                setCurrentInput(currentInput+1)
            }   
        }
    }

    const handlePlayAgain = () => {
        let emptyBoard = {
            0: ["", "", "", "", "", ""],
            1: ["", "", "", "", "", ""],
            2: ["", "", "", "", "", ""],
            3: ["", "", "", "", "", ""],
            4: ["", "", "", "", "", ""],
            5: ["", "", "", "", "", ""],      
        }
        setRowClasses(emptyBoard)
        setRowValues(emptyBoard)
        setCurrentMatches(["?", "?", "?", "?", "?"])
        setCurrentRow(0)
        setCurrentInput(0)
        setGameOverMessage("")
        setOutOfTurnsFlag(false)
        setAllLettersTried({validLetters: [], invalidLetters: []})
        updateCurrentWord()
        
    }

    const handleSubmit = (currentGuess) => {

        if(allWords.words.includes(currentGuess.join(""))){
            if(currentRow === 5){
                setOutOfTurnsFlag(true)
                setGameOverMessage("Sorry! The word was " + currentWord.join(""))
            } 
            updateCellColors(rowValues[currentRow])
            setCurrentRow(currentRow+1)
            setCurrentInput(0)
        }else{
            // console.log(allWords);
            !allWords.words.length ? setWarnings("Word dictionary could not be fetched") : setWarnings("Invalid Word Choice")
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col match-col">
                    <div className="current-matches">
                        <CurrentMatches currentMatches={currentMatches}/>
                    </div>
                </div>
                <div className="col-6 play-column">
                    <h1 className="game-title">Wordly</h1>
                        <GameBoard rowClasses={rowClasses} rowValues={rowValues} />
                        <div className="warnings">
                            {warnings}
                        </div>   
                        <Keyboard 
                            allLettersTried={allLettersTried}
                            updateLetterValue={updateLetterValue}
                            outOfTurnsFlag={outOfTurnsFlag}
                        />
                <div className={outOfTurnsFlag ? "game-over-message" : "hide-content"}>
                    {gameOverMessage} <br />
                    <button className="btn play-again-btn" onClick={handlePlayAgain}>Play Again</button>
                </div>
                    {/* <div className="warnings">
                        {warnings}
                    </div>                         */}
                </div>
                <div className="col">
                </div>
            </div>
        </div>
    )
}

export default Home