import { useState } from "react";

const Colorizer = () => {
    const [color, setColor] = useState("gray");

    const getRandomColor = () => {
       const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
       return randomColor;
    } 

    const changeColor = () => {
        const randomColor = getRandomColor();
        setColor(randomColor);
    }

    return (
        <div className="colorizer">
            <div className="box" style={{ backgroundColor: color }}>{color}</div>
            <button onClick={ changeColor } >Change Color</button>
        </div>
    )
}

export default Colorizer;