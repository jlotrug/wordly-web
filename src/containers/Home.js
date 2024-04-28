import { useState } from "react"


const Home = () => {
    const [rowValues, setRowValues] = useState({
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
    const [rowOneClass, setRowOneClass] = useState("letter-present")
    const {letterOne, letterTwo, letterThree, letterFour, letterFive} = formData
    const [currentRow, setCurrentRow] = useState(0)
    const [currentWord, setCurrentWord] = useState(["B", "L", "A", "D", "E"])


    const handleSubmit = (e) => {
        e.preventDefault()
        let currentGuess = [formData.letterOne, formData.letterTwo, formData.letterThree, formData.letterFour, formData.letterFive]

        setRowValues({...rowValues, [currentRow]: currentGuess})
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

            <div className="attempts">
                <table className="attempt-table">
                    <tbody>
                        <tr className="table-row">
                            <td className={`attempt-cell ` + rowOneClass} >{rowValues[0][0]}</td>
                            <td className="attempt-cell">{rowValues[0][1]}</td>
                            <td className="attempt-cell">{rowValues[0][2]}</td>
                            <td className="attempt-cell">{rowValues[0][3]}</td>
                            <td className="attempt-cell">{rowValues[0][4]}</td>
                        </tr>
                        <tr className="table-row">
                            <td className={`attempt-cell ` + rowOneClass} >{rowValues[1][0]}</td>
                            <td className="attempt-cell">{rowValues[1][1]}</td>
                            <td className="attempt-cell">{rowValues[1][2]}</td>
                            <td className="attempt-cell">{rowValues[1][3]}</td>
                            <td className="attempt-cell">{rowValues[1][4]}</td>
                        </tr>
                        <tr className="table-row">
                            <td className={`attempt-cell ` + rowOneClass} >{rowValues[2][0]}</td>
                            <td className="attempt-cell">{rowValues[2][1]}</td>
                            <td className="attempt-cell">{rowValues[2][2]}</td>
                            <td className="attempt-cell">{rowValues[2][3]}</td>
                            <td className="attempt-cell">{rowValues[2][4]}</td>
                        </tr>
                        <tr>
                            <td className={`attempt-cell ` + rowOneClass} >{rowValues[3][0]}</td>
                            <td className="attempt-cell">{rowValues[3][1]}</td>
                            <td className="attempt-cell">{rowValues[3][2]}</td>
                            <td className="attempt-cell">{rowValues[3][3]}</td>
                            <td className="attempt-cell">{rowValues[3][4]}</td>
                        </tr>
                        <tr className="table-row">
                            <td className={`attempt-cell ` + rowOneClass} >{rowValues[4][0]}</td>
                            <td className="attempt-cell">{rowValues[4][1]}</td>
                            <td className="attempt-cell">{rowValues[4][2]}</td>
                            <td className="attempt-cell">{rowValues[4][3]}</td>
                            <td className="attempt-cell">{rowValues[4][4]}</td>
                        </tr>

                    </tbody>
                    
                </table>
            </div>

            <div className="input-containers">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="letterOne" 
                        className="letter-input" 
                        maxLength="1" 
                        value={letterOne}
                        onChange={onChange}
                        />
                    <input 
                        type="text" 
                        name="letterTwo" 
                        className="letter-input" 
                        maxLength="1" 
                        value={letterTwo}
                        onChange={onChange}
                        />
                    <input 
                        type="text" 
                        name="letterThree" 
                        className="letter-input" 
                        maxLength="1"
                        value={letterThree}
                        onChange={onChange} 
                        />
                    <input 
                        type="text" 
                        name="letterFour" 
                        className="letter-input" 
                        maxLength="1"
                        value={letterFour} 
                        onChange={onChange}
                        />
                    <input 
                        type="text" 
                        name="letterFive" 
                        className="letter-input" 
                        maxLength="1" 
                        value={letterFive}
                        onChange={onChange}
                        /><br />
                    <button className="btn" type="submit">Submit</button>
                </form>
                

            </div>
            
        </div>
    )
}

export default Home