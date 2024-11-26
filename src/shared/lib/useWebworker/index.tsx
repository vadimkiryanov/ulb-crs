import { useState } from "react";

type WorkerFunction<T, R> = (data: T) => R;

interface WebWorkerResult<R> {
	result: R | null;
	error: string | null;
	run: (value: unknown) => void;
	isPending: boolean;
}

function workerHandler<T, R>(fn: WorkerFunction<T, R>): string {
	return `
    onmessage = function(event) {
      postMessage((${fn.toString()})(event.data));
    };
  `;
}

export function useDisposableWebworker<T, R>(fn: WorkerFunction<T, R>): WebWorkerResult<R> {
	const [result, setResult] = useState<R | null>(null);
	const [isPending, setPending] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const run = (value: T) => {
    setPending(true);
    setResult(null);
    setError(null);

		const worker = new Worker(URL.createObjectURL(new Blob([workerHandler(fn)], { type: "application/javascript" })));

		worker.onmessage = (event: MessageEvent<R>) => {
			setResult(event.data);
			setPending(false);
			worker.terminate();
		};
		worker.onerror = (error: ErrorEvent) => {
			setError(error.message);
			setPending(false);
			worker.terminate();
		};
		worker.postMessage(value);
	};

	return {
		result,
		error,
		run,
		isPending,
	};
}
