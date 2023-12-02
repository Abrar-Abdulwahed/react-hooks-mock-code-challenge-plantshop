import React, { useState } from 'react';

function Search({ onSearch }) {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (event) => {
		const value = event.target.value;
		setSearchTerm(value);
		onSearch(value);
	};

	return (
		<div className="searchbar">
			<label htmlFor="search">Search Plants:</label>
			<input
				type="text"
				id="search"
				placeholder="Type a name to search..."
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	);
}

export default Search;
