import React, {useState} from "react";
const Colors = () =>{

    const [ color, setColor] = useState('');

    const classGreen = `green ${color == 'green' ? 'light' : ''}`
    const classYellow = `yellow ${color == 'yellow' ? 'light' : ''}`
    const classRed = `red ${color == 'red' ? 'light' : ''}`

    return (
        <div className="trafficlight">
            <button className={classGreen} onClick={() => setColor('green')}></button>
            <button className={classYellow} onClick={() => setColor('yellow')}></button>
            <button className={classRed} onClick={() => setColor('red')}></button>
        </div>
    )
}

export default Colors;