// App imports
import { Copy } from './copy';

export const Phone = () => {
	return (
			<div className="contact-item-wrapper">
				<img 
					style={{width: "20px"}}
					src="static/components/landing/social/whatsapp.svg" 
					alt="pin-location"
			     />
				<div className="pages-description">+595 986 514 207</div>
				<Copy/>
			</div>
	)
}

Phone.displayName="Phone";