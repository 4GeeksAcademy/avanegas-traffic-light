import React, {useState} from "react";
import Colors from "./Colors";
import ButtonLight from "./ButtonLigth";


const Home = () => {
	const [ color, setColor] = useState('');
	
	console.log('colorrrrrrrr Hooomeeee', color)

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">¡Traffic Light!</h1>
			<Colors color={color} setColor={setColor} />
		<div>
			<ButtonLight setColor={setColor}/>
		</div>
		</div>
	);
};

export default Home;
