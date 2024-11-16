import React from "react";
import * as styles from "./Counter.module.scss";

export const Counter = () => {
	const [count, setCount] = React.useState(0);
	return (
		<div>
			<button className={styles.btn} onClick={() => setCount((prev) => prev + 1)}>
				+
			</button>
			<div>{count}</div>
			<button className={styles.btn} onClick={() => setCount((prev) => prev - 1)}>
				-
			</button>
		</div>
	);
};
