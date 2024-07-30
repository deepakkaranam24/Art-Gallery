import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./ArtDetail.css";

const ArtDetail = ({ setDetail }) => {
	const { id } = useParams();
	const [artwork, setArtwork] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		fetchArtwork();
	}, [id]);

	const fetchArtwork = async () => {
		setDetail(true);
		try {
			//detail description based on the id passed in route
			const response = await fetch(
				`https://api.artic.edu/api/v1/artworks/${id}`
			);
			const data = await response.json();
			setArtwork(data.data);
		} catch (error) {
			console.error("Error fetching artwork:", error);
		}
		setLoading(false);
	};

	const handleBackClick = () => {
		setDetail(false);
		navigate(location.state?.from || "/");
	};

	if (loading) return <p>Loading...</p>;

	if (!artwork) return <p>Artwork not found.</p>;

	return (
		<div className='art-detail'>
			<button onClick={handleBackClick}>Back</button>
			<h2>{artwork.title}</h2>
			<p>Artist: {artwork.artist_display}</p>
			<p>Date: {artwork.date_display}</p>
			<p>Main Reference Number: {artwork.main_reference_number}</p>
			<p>Dimensions: {artwork.dimensions}</p>
			<img
				src={artwork.thumbnail.lqip || artwork.image_url}
				alt={artwork.title}
			/>
		</div>
	);
};

export default ArtDetail;
