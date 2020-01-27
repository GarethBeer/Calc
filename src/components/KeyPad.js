import React, { useContext } from "react";
import { CalculatorDispatchContext } from "../context/CalculatorContext";

const KeyPad = () => {
	const {
		numberPressed,
		add,
		calculate,
		clear,
		subtract,
		multiply,
		divide,
		remainder
	} = useContext(CalculatorDispatchContext);
	return (
		<div className="keypadContainer">
			<div className="operators row">
				<button onClick={add}>+</button>
				<button onClick={subtract}>-</button>
				<button onClick={multiply}>*</button>
				<button onClick={divide}>/</button>
				<button onClick={remainder}>%</button>
			</div>
			<div className="digitsTop row">
				<button onClick={() => numberPressed(7)}>7</button>
				<button onClick={() => numberPressed(8)}>8</button>
				<button onClick={() => numberPressed(9)}>9</button>
			</div>
			<div className="digitsMiddle row">
				<button onClick={() => numberPressed(4)}>4</button>
				<button onClick={() => numberPressed(5)}>5</button>
				<button onClick={() => numberPressed(6)}>6</button>
			</div>
			<div className="digitsBottom row">
				<button onClick={() => numberPressed(1)}>1</button>
				<button onClick={() => numberPressed(2)}>2</button>
				<button onClick={() => numberPressed(3)}>3</button>
			</div>
			<div className="digitZero row">
				<button onClick={() => numberPressed(0)}>0</button>
				<button onClick={clear}>clear</button>
				<button onClick={calculate}>=</button>
			</div>
		</div>
	);
};

export default KeyPad;
