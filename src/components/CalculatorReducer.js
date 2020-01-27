const calculatorReducer = (state, action) => {
	const { current, acc, operation } = state;
	const total = (operation, acc, current) => {
		if (operation === "+") {
			return acc + current;
		}
		if (operation === "-") {
			return acc - current;
		}
		if (operation === "/") {
			return acc / current;
		}
		if (operation === "*") {
			return acc * current;
		}
		if (operation === "%") {
			return acc % current;
		}
	};
	const sum = total(operation, acc, current);

	const history = (curr, op, acc, sum) => {
		if (curr && op && acc) {
			return `${current} ${operation} ${acc} = ${sum}`;
		} else {
			return "";
		}
	};

	switch (action.type) {
		case "add":
			return { ...state, current: 0, acc: current, operation: "+" };
		case "subtract":
			return { ...state, current: 0, acc: current, operation: "-" };
		case "multiply":
			return { ...state, current: 0, acc: current, operation: "*" };
		case "divide":
			return { ...state, current: 0, acc: current, operation: "/" };
		case "remainder":
			return { ...state, current: 0, acc: current, operation: "%" };
		case "number-pressed":
			return { ...state, current: current * 10 + action.value };
		case "calculate":
			return {
				...state,
				current: 0,
				acc: 0,
				operation: "",
				total: sum,
				history: history(current, operation, acc, sum)
			};
		case "clear":
			return {
				...state,
				current: 0,
				acc: 0,
				operation: "",
				total: 0,
				history: ""
			};

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};

export default calculatorReducer;
