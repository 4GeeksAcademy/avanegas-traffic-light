import React, {useState} from "react";


const ButtonLight = ({setColor}) => {

  const [ colorsNew, setColorsNew] = useState(0);

    const changeColors = () => {
      if (colorsNew === 0){
        setColorsNew(colorsNew + 1)
        return 'green'
      }
      if (colorsNew === 1){
        setColorsNew(colorsNew + 1)
        return 'yellow'
      }
      if (colorsNew === 2){
        setColorsNew(0)
        return 'red'
      }
    }

    return (
        <div>
            <button type="button" className="btn btn-info" onClick={()=>setColor(changeColors())}>Altern Color</button>
        </div>
    )
}

export default ButtonLight;