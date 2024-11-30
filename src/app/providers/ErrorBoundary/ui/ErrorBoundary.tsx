import { ErrorInPage } from "@/widgets/ErrorInPage";
import React, { Component, ErrorInfo, ReactNode } from "react";
import { Trans } from "react-i18next";

interface IErrorBoundaryProps {
	children?: ReactNode;
}

interface IErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
	public state: IErrorBoundaryState = {
		hasError: false,
	};

	public static getDerivedStateFromError(_: Error): IErrorBoundaryState {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log("Uncaught error:", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return <ErrorInPage />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
