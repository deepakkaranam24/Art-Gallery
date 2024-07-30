import React from "react";
import { Link } from "react-router-dom";
import "./ArtList.css";
const ArtList = ({ artworks }) => {
	return (
		<div className='art-list'>
			{artworks.map((art) => (
				<div
					key={art.id}
					className='art-item'
				>
					<Link to={`/art/${art.id}`}>
						<img
							src={art.thumbnail.lqip}
							alt={art.thumbnail.alt_text}
						/>
						<h3>{art.title}</h3>
					</Link>
				</div>
			))}
		</div>
	);
};

export default ArtList;
