// App imports
import { Links } from './links';
import { Email } from './email';
import { Phone } from './phone';
import './styles.scss';

export const Left = () => {
	return (
		<div className="contact-info-wrapper">
			<div className="tools-title">Contacts</div>
			<div className="social-info">
				<img 
					src="static/components/landing/profile/dog.png" 
					className="dog-image" 
					alt="dog-image"
				/>
				<div style={{display: "grid", gridGap: "10px", alignItems: "center"}}>
					<Links/>
					<Email/>
					<Phone/>
				</div>
			</div>
		</div>
	)
}

Left.displayName="Left"