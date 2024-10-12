import './styles.scss';

export const Links = () => {
	return (
		
		<a 
			href="https://www.linkedin.com/company/ugeom"
			style={{display: "table-cell", textDecoration: "none"}}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="contact-item-wrapper">
				<div className="social-button-wrapper">
				<img 
					src={process.env.PUBLIC_URL + `/static/social/linkedin.png`}
					className="social-landing-image" 
					alt="linkedin"
					width="20px"
				/>
				</div>
				<div className="pages-description">ugeom</div>
			</div>
		</a>
		
	)
}

Links.displayName="Links";