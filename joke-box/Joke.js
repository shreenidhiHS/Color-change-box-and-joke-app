import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown , setisShown] = React.useState(false)
     
    const styles ={
        display : isShown ? "flex" : "none"
    }
    
    function toggle(){
        setisShown(prevState=> !prevState)
    }
    
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p style={styles}>{props.punchline}</p>
            <button id="btn" onClick={toggle}>{isShown ? "Hide Answer" : "Show Answer"}</button>
            <hr />
        </div>
    )
}