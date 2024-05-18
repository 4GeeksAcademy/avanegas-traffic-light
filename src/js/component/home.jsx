import React from "react";
import Colors from "./Colors";


//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">¡Traffic Light!</h1>
			<Colors />
		</div>
	);
};

export default Home;
