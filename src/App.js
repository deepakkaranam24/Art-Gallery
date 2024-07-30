import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArtList from "./ArtList/ArtList";
import ArtDetail from "./ArtDetail/ArtDetail";
import SearchBar from "./SearchBar/SearchBar";
import Pagination from "./Pagination/Pagination";

function App() {
	const [artworks, setArtworks] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState("");
	const [loading, setLoading] = useState(true);
	const [isDetailPage, setDetail] = useState(false);

	useEffect(() => {
		// function to fetch artworks data
		fetchArtworks();
	}, [currentPage, searchTerm]);

	const fetchArtworks = async () => {
		//setting the loading icon to true
		setLoading(true);
		try {
			let query = `page=${currentPage}&limit=10`;
			// serach based on term example q=cats
			if (searchTerm) {
				query += `&q=${searchTerm}`;
			}

			const response = await fetch(
				`https://api.artic.edu/api/v1/artworks/search?${query}`
			);
			const data = await response.json();
			setArtworks(data.data);
		} catch (error) {
			//error handling
			console.error("Error fetching artworks:", error);
		}
		setLoading(false);
	};

	return (
		<Router>
			<div className='App'>
				{!isDetailPage && <SearchBar setSearchTerm={setSearchTerm} />}
				{loading ? (
					<p>Loading...</p>
				) : (
					<>
						<Routes>
							<Route
								path='/'
								element={<ArtList artworks={artworks} />}
							/>
							<Route
								path='/art/:id'
								element={<ArtDetail setDetail={setDetail} />}
							/>
						</Routes>
						{!isDetailPage && (
							<Pagination
								currentPage={currentPage}
								setCurrentPage={setCurrentPage}
							/>
						)}
					</>
				)}
			</div>
		</Router>
	);
}

export default App;
