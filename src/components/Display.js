import React, { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";

const Display = () => {
	const { current, total, acc, operation, history } = useContext(
		CalculatorContext
	);
	const numPress = current ? <h1 className="display"> {current}</h1> : "";

	const numAcc = acc ? <h1 className="display"> {acc}</h1> : "";
	const numTotal =
		!current && !acc ? <h1 className="display"> {total}</h1> : "";
	const operator = operation ? <h1 className="display"> {operation}</h1> : "";
	return (
		<div className="displayContainer">
			<div className="calculations">
				{numAcc}
				{operator}
				{numPress}
				{numTotal}
			</div>
			<div className="history">
				<span>{history}</span>
			</div>
		</div>
	);
};

export default Display;
