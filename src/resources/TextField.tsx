import React, { useState, useRef, useReducer } from "react";

interface Person {
	firstName: string;
	lastName: string;
}

interface Props {
	text: string;
	ok?: boolean;
	i?: number;
	fn?: (bob: string) => number;
	person?: Person;
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
	text: string;
	value: number;
}

type Action = { type: "add"; text: string } | { type: "remove"; idx: number };

interface Todo {
	text: string;
	complete: boolean;
}

type State = Todo[];

const TextField: React.FC<Props> = ({ text, handleChange }) => {
	const [count, setCount] = useState<TextNode>({
		text: "michael",
		value: 45
	});
	const input = useRef<HTMLInputElement>(null);
	const divRef = useRef<HTMLDivElement>(null);
	// setCount()
	return (
		<div ref={divRef}>
			<input type="text" ref={input} onChange={handleChange} />
			<h1>{text}</h1>
		</div>
	);
};

const TodoReducer = (state: State, action: Action) => {
	switch (action.type) {
		case "add":
			return [...state, { text: action.text, complete: false }];
		case "remove":
			return state.filter((_, i) => action.idx !== i);

		default:
			return state;
	};
};

const ReducerExample: React.FC = () => {
	const [todos, dispatch] = useReducer(TodoReducer, []);
	return (
		<>
			<div>{JSON.stringify(todos)}</div>
			<button
				onClick={() => {
					dispatch({ type: "add", text: "..." });
				}}>
				click !
			</button>
		</>
	);
};

export { ReducerExample, TextField };
