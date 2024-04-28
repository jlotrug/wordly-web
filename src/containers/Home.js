import { useState } from "react"


const Home = () => {
    const [rowOne, setRowOne] = useState(["", "", "", "", "", ""])
    const [rowTwo, setRowTwo] = useState(["", "", "", "", "", ""])
    const [rowThree, setRowThree] = useState(["", "", "", "", "", ""])
    const [rowFour, setRowFour] = useState(["", "", "", "", "", ""])
    const [rowFive, setRowFive] = useState(["", "", "", "", "", ""])
    const [formData, setFormData] = useState({
        letterOne: "",
        letterTwo: "",
        letterThree: "",
        letterFour: "",
        letterFive: ""
    })
    const {letterOne, letterTwo, letterThree, letterFour, letterFive} = formData
    const [currentRow, setCurrentRow] = useState(1)


    const handleSubmit = (e) => {
        e.preventDefault()
        let currentGuess = [formData.letterOne, formData.letterTwo, formData.letterThree, formData.letterFour, formData.letterFive]

        switch(currentRow){
            case 1:
                setRowOne(currentGuess)
                break;
            case 2:
                setRowTwo(currentGuess)
                break;
            case 3:
                setRowThree(currentGuess)
                break;
            case 4:
                setRowFour(currentGuess)
                break;
            case 5:
                setRowFive(currentGuess)
                break;
        }
        setCurrentRow(currentRow+1)
    }

    const onChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>Wordly</h1>

            <div className="attempts">
                <table className="attempt-table">
                    <tbody>
                        <tr className="table-row">
                            <td className="attempt-cell">{rowOne[0]}</td>
                            <td className="attempt-cell">{rowOne[1]}</td>
                            <td className="attempt-cell">{rowOne[2]}</td>
                            <td className="attempt-cell">{rowOne[3]}</td>
                            <td className="attempt-cell">{rowOne[4]}</td>
                        </tr>
                        <tr className="table-row">
                            <td className="attempt-cell">{rowTwo[0]}</td>
                            <td className="attempt-cell">{rowTwo[1]}</td>
                            <td className="attempt-cell">{rowTwo[2]}</td>
                            <td className="attempt-cell">{rowTwo[3]}</td>
                            <td className="attempt-cell">{rowTwo[4]}</td>
                        </tr>
                        <tr className="table-row">
                            <td className="attempt-cell">{rowThree[0]}</td>
                            <td className="attempt-cell">{rowThree[1]}</td>
                            <td className="attempt-cell">{rowThree[2]}</td>
                            <td className="attempt-cell">{rowThree[3]}</td>
                            <td className="attempt-cell">{rowThree[4]}</td>
                        </tr>
                        <tr>
                            <td className="attempt-cell">{rowFour[0]}</td>
                            <td className="attempt-cell">{rowFour[1]}</td>
                            <td className="attempt-cell">{rowFour[2]}</td>
                            <td className="attempt-cell">{rowFour[3]}</td>
                            <td className="attempt-cell">{rowFour[4]}</td>
                        </tr>
                        <tr className="table-row">
                            <td className="attempt-cell">{rowFive[0]}</td>
                            <td className="attempt-cell">{rowFive[1]}</td>
                            <td className="attempt-cell">{rowFive[2]}</td>
                            <td className="attempt-cell">{rowFive[3]}</td>
                            <td className="attempt-cell">{rowFive[4]}</td>
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