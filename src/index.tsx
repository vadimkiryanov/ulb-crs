import { App } from "./App";
import { createRoot } from "react-dom/client";

import "./index.scss";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
