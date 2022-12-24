import React from "react"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "green" : "red"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
            onClick={()=>props.toggle(props.id)}
        >
        </div>
    )
}