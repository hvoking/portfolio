export const Graphics = () => {
	return (
		<div style={{display: "grid", gridGap: "10px"}}>
			<img
				className="generativa-challenge" 
				src="static/components/landing/works/jukka/4.jpg" 
				alt="generativa-jukka"
			/>
			<div className="video-container">
				<iframe 
					className="youtube-video-wrapper"
					src="https://www.youtube.com/embed/m5NhVKJhFw4?si=sa6bowLarQ5sND6R&amp;start=1951" 
					frameBorder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					allowFullScreen
				/>
			</div>
		</div>
	)
}

Graphics.displayName="Graphics";