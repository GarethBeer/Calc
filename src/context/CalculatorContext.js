import React, { createContext, useReducer } from "react";
import calculatorReducer from "../components/CalculatorReducer";

export const CalculatorContext = createContext();
export const CalculatorDispatchContext = createContext();

const CalculatorProvider = ({ children }) => {
	const [state, dispatch] = useReducer(calculatorReducer, {
		current: 0,
		acc: 0,
		total: 0,
		operation: "",
		history: ""
	});

	return (
		<CalculatorContext.Provider value={state}>
			<CalculatorDispatchContext.Provider
				value={{
					numberPressed: value => dispatch({ type: "number-pressed", value }),
					add: () => dispatch({ type: "add" }),
					clear: () => dispatch({ type: "clear" }),
					subtract: () => dispatch({ type: "subtract" }),
					multiply: () => dispatch({ type: "multiply" }),
					divide: () => dispatch({ type: "divide" }),
					remainder: () => dispatch({ type: "remainder" }),
					calculate: () => dispatch({ type: "calculate" })
				}}
			>
				{children}
			</CalculatorDispatchContext.Provider>
		</CalculatorContext.Provider>
	);
};

export default CalculatorProvider;
