import FormRow from './FormRow'

const GameBoard = ({rowClasses, rowValues,  outOfTurnsFlag}) => {

    return (
        <div className="attempts">
            <table className="attempt-table">
                <tbody>
                    <tr className="table-row">
                        <td className={`attempt-cell ` + rowClasses[0][0]}>{rowValues[0][0]}</td>
                        <td className={`attempt-cell ` + rowClasses[0][1]}>{rowValues[0][1]}</td>
                        <td className={`attempt-cell ` + rowClasses[0][2]}>{rowValues[0][2]}</td>
                        <td className={`attempt-cell ` + rowClasses[0][3]}>{rowValues[0][3]}</td>
                        <td className={`attempt-cell ` + rowClasses[0][4]}>{rowValues[0][4]}</td>
                    </tr>
                    <tr className="table-row">
                        <td className={`attempt-cell ` + rowClasses[1][0]}>{rowValues[1][0]}</td>
                        <td className={`attempt-cell ` + rowClasses[1][1]}>{rowValues[1][1]}</td>
                        <td className={`attempt-cell ` + rowClasses[1][2]}>{rowValues[1][2]}</td>
                        <td className={`attempt-cell ` + rowClasses[1][3]}>{rowValues[1][3]}</td>
                        <td className={`attempt-cell ` + rowClasses[1][4]}>{rowValues[1][4]}</td>
                    </tr>
                    <tr className="table-row">
                        <td className={`attempt-cell ` + rowClasses[2][0]}>{rowValues[2][0]}</td>
                        <td className={`attempt-cell ` + rowClasses[2][1]}>{rowValues[2][1]}</td>
                        <td className={`attempt-cell ` + rowClasses[2][2]}>{rowValues[2][2]}</td>
                        <td className={`attempt-cell ` + rowClasses[2][3]}>{rowValues[2][3]}</td>
                        <td className={`attempt-cell ` + rowClasses[2][4]}>{rowValues[2][4]}</td>
                    </tr>
                    <tr>
                        <td className={`attempt-cell ` + rowClasses[3][0]}>{rowValues[3][0]}</td>
                        <td className={`attempt-cell ` + rowClasses[3][1]}>{rowValues[3][1]}</td>
                        <td className={`attempt-cell ` + rowClasses[3][2]}>{rowValues[3][2]}</td>
                        <td className={`attempt-cell ` + rowClasses[3][3]}>{rowValues[3][3]}</td>
                        <td className={`attempt-cell ` + rowClasses[3][4]}>{rowValues[3][4]}</td>
                    </tr>
                    <tr className="table-row">
                        <td className={`attempt-cell ` + rowClasses[4][0]}>{rowValues[4][0]}</td>
                        <td className={`attempt-cell ` + rowClasses[4][1]}>{rowValues[4][1]}</td>
                        <td className={`attempt-cell ` + rowClasses[4][2]}>{rowValues[4][2]}</td>
                        <td className={`attempt-cell ` + rowClasses[4][3]}>{rowValues[4][3]}</td>
                        <td className={`attempt-cell ` + rowClasses[4][4]}>{rowValues[4][4]}</td>
                    </tr>
                    <tr className="table-row">
                        <td className={`attempt-cell ` + rowClasses[5][0]}>{rowValues[5][0]}</td>
                        <td className={`attempt-cell ` + rowClasses[5][1]}>{rowValues[5][1]}</td>
                        <td className={`attempt-cell ` + rowClasses[5][2]}>{rowValues[5][2]}</td>
                        <td className={`attempt-cell ` + rowClasses[5][3]}>{rowValues[5][3]}</td>
                        <td className={`attempt-cell ` + rowClasses[5][4]}>{rowValues[5][4]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GameBoard