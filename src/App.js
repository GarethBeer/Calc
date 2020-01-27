import React from "react";
import Display from "./components/Display";
import KeyPad from "./components/KeyPad";
import CalculatorProvider from "./context/CalculatorContext";

import "./style/app.css";

const App = () => {
	return (
		<div className="App">
			<CalculatorProvider>
				<Display />
				<KeyPad />
			</CalculatorProvider>
		</div>
	);
};

export default App;
