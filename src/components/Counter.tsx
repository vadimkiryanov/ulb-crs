import React from "react";
import "./style.scss";

export const Counter = () => {
	const [count, setCount] = React.useState(0);
	return (
		<div>
			<button onClick={() => setCount((prev) => prev + 1)}>+</button>
			<div>{count}</div>
			<button onClick={() => setCount((prev) => prev - 1)}>-</button>
		</div>
	);
};
