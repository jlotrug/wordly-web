import { useEffect } from "react"


const LettersTried = ({allLettersTried}) => {

    // const createRows = () => {
    //     rows = []
    //     rows.push(<tr className="letter-tried-row"></tr>)
    // }
   
    return (
        <table className="letters-tried">
            <tbody>

                <tr className="letter-tried-row">
  
                    {/* {allLettersTried.map((el, index) => {
                        return (<td className="letter-tried"></td>)
                    })} */}
                    {/* <td className="letter-tried"></td>
                    <td className="letter-tried"></td>
                    <td className="letter-tried"></td>
                    <td className="letter-tried"></td>
                    <td className="letter-tried"></td> */}

                </tr>
                <tr className="letter-tried-row">
                    <td className="letter-tried"></td>
                    <td className="letter-tried"></td>
                    <td className="letter-tried"></td>
                    <td className="letter-tried"></td>
                    <td className="letter-tried"></td>
                </tr>
                <tr className="letter-tried-row">
                    <td className="letter-tried"></td>
                    <td className="letter-tried"></td>
                    <td className="letter-tried"></td>
                    <td className="letter-tried"></td>
                    <td className="letter-tried"></td>
                </tr>
                <tr className="letter-tried-row">
                    <td className="letter-tried"></td>
                    <td className="letter-tried"></td>
                    <td className="letter-tried"></td>
                    <td className="letter-tried"></td>
                    <td className="letter-tried"></td>
                </tr>
                <tr className="letter-tried-row">
                    
                </tr>
            </tbody>
        </table>
    )
}

export default LettersTried