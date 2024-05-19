import React, {useState} from "react";

const Colors = ({color, setColor}) =>{

    const classGreen = `green ${color == 'green' ? 'light' : ''}`
    const classYellow = `yellow ${color == 'yellow' ? 'light' : ''}`
    const classRed = `red ${color == 'red' ? 'light' : ''}`

    return (
        <div className="trafficlight">
            <button className={classGreen} onClick={() => setColor('green')}></button>
            <button className={classYellow} onClick={() => setColor('yellow')}></button>
            <button className={classRed} onClick={() => setColor('red')}></button>
            {/* <div>
                <button type="button" className="btn btn-info" onClick={() => setColor('green')}>Altern Color</button>
            </div> */}
        </div>
    )
}

export default Colors;