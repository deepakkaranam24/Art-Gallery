import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setSearchTerm }) => {
	const [input, setInput] = useState("");

	const handleSubmit = (e) => {
		//handlesubmit and update the parent state
		e.preventDefault();
		setSearchTerm(input);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Search artworks'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>

			<button type='submit'>Search</button>
		</form>
	);
};

export default SearchBar;
