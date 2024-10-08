// App imports
import { Copy } from './copy';

export const Email = () => {
	return (
			<div className="contact-item-wrapper">
				<img 
					style={{width: "20px"}}
					src={process.env.PUBLIC_URL + "/static/social/gmail.svg"} 
					alt="pin-location"
			     />
				<div className="pages-description">gus@ugeom.com</div>
				<Copy/>
			</div>
	)
}

Email.displayName="Email";