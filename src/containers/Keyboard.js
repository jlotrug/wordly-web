import backspaceimg from '../backspaceimg.svg'

const Keyboard = () => {


    return (
        <div className="keyboard-container">
            <div className="keyboard-row krow-1">
                <button className="keyboard-key">Q</button>
                <button className="keyboard-key">W</button>
                <button className="keyboard-key">E</button>
                <button className="keyboard-key">R</button>
                <button className="keyboard-key">T</button>
                <button className="keyboard-key">Y</button>
                <button className="keyboard-key">U</button>
                <button className="keyboard-key">I</button>
                <button className="keyboard-key">O</button>
                <button className="keyboard-key">P</button>
            </div>
            <div className="keyboard-row krow-2">
                 <button className="keyboard-key">A</button>
                 <button className="keyboard-key">S</button>
                 <button className="keyboard-key">D</button>
                 <button className="keyboard-key">F</button>
                 <button className="keyboard-key">G</button>
                 <button className="keyboard-key">H</button>
                 <button className="keyboard-key">J</button>
                 <button className="keyboard-key">K</button>
                 <button className="keyboard-key">L</button>
            </div>
            <div className="keyboard-row krow-3">
            
                 {/* <button className="keyboard-key spec-key">Enter</button> */}
                 <button className="keyboard-key">Z</button>
                 <button className="keyboard-key">X</button>
                 <button className="keyboard-key">C</button>
                 <button className="keyboard-key">V</button>
                 <button className="keyboard-key">B</button>
                 <button className="keyboard-key">N</button>
                 <button className="keyboard-key">M</button>
                 <button className="keyboard-key spec-key"> <img src={backspaceimg} alt="" width="30px" height="30px"/> </button>
            </div>            
        </div>
        // <div className="keyboard-container">
        //     <table className="keyboard-table">
        //         <tr className="keyboard-row krow-1">
        //             <td className="keyboard-key">Q</td>
        //             <td className="keyboard-key">W</td>
        //             <td className="keyboard-key">E</td>
        //             <td className="keyboard-key">R</td>
        //             <td className="keyboard-key">T</td>
        //             <td className="keyboard-key">Y</td>
        //             <td className="keyboard-key">U</td>
        //             <td className="keyboard-key">I</td>
        //             <td className="keyboard-key">O</td>
        //             <td className="keyboard-key">P</td>
        //         </tr>
        //         <tr className="keyboard-row krow-2">
        //             <td className="keyboard-key">A</td>
        //             <td className="keyboard-key">S</td>
        //             <td className="keyboard-key">D</td>
        //             <td className="keyboard-key">F</td>
        //             <td className="keyboard-key">G</td>
        //             <td className="keyboard-key">H</td>
        //             <td className="keyboard-key">J</td>
        //             <td className="keyboard-key">K</td>
        //             <td className="keyboard-key">L</td>
        //         </tr>
        //     </table>
        // </div>
    )
}

export default Keyboard