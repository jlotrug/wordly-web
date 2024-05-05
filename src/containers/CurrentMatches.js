import '../style/currentmatches-style.css'

const CurrentMatches = ({currentMatches}) => {
    return (
        <table className="match-table">
            <tbody>
            <tr className="table-row">
                <td className={`match-cell `}>{currentMatches[0]}</td>
                <td className={`match-cell `}>{currentMatches[1]}</td>
                <td className={`match-cell `}>{currentMatches[2]}</td>
                <td className={`match-cell `}>{currentMatches[3]}</td>
                <td className={`match-cell `}>{currentMatches[4]}</td>
            </tr>
            </tbody>
        </table>
    )
}

export default CurrentMatches