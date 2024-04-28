

const GameForm = ({onChange, formData, handleSubmit}) => {
    const {letterOne, letterTwo, letterThree, letterFour, letterFive} = formData
    return (
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
    )
}

export default GameForm