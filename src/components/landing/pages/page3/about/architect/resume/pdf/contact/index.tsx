// App imports
import './styles.scss';

export const Contact = () => {
	return (
		<div className="resume-contact">
			<div className="resume-contact-item">
				<img
					className="resume-contact-image" 
					src="static/components/landing/social/iphone.svg" 
					alt="iphone" 
				/>
		    	<div>+595 (986) 514-207</div>
		    </div>
		    <div className="resume-contact-item">
		    	<img 
		    		className="resume-contact-image" 
		    		src="static/components/landing/social/email.svg" 
		    		alt="email" 
		    	/>
		    	<div>gus@ugeom.com</div>
		    </div>
		    <a 
		    	href="https://www.linkedin.com/in/urbangeometries/"
		    	className="resume-contact-item" 
		    	target="_blank"
		    	rel="noopener noreferrer"
		    	style={{cursor: "pointer"}}
		    >
		    	<img 
		    		className="resume-contact-image" 
		    		src="static/components/landing/social/linkedin.svg" 
		    		alt="linkedin" 
		    	/>
		    	<div>linkedin.com/in/urbangeometries</div>
		    </a>
		    <a 
	            	href="https://urbangeometries.com/"
					target="_blank"
					rel="noopener noreferrer"
	            >
	            	https://urbangeometries.com/
	            </a>
		</div>
	)
}

Contact.displayName="Contact";