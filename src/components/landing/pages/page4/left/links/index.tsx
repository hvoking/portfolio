import './styles.scss';

export const Links = () => {
	return (
		
		<a 
			href="https://www.linkedin.com/in/computational-designer/"
			style={{display: "table-cell", textDecoration: "none"}}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="contact-item-wrapper">
				<div className="social-button-wrapper">
				<img 
					src={`static/components/landing/social/linkedin.png`}
					className="social-landing-image" 
					alt="linkedin"
					width="20px"
				/>
				</div>
				<div className="pages-description">linkedin/profile</div>
			</div>
		</a>
		
	)
}

Links.displayName="Links";