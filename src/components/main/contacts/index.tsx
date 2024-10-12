// App imports
import { Links } from './links';
import { Email } from './email';
import './styles.scss';

export const Contacts = () => {
	return (
		<section id="page3" className="page3-wrapper">
			<div className="contact-info-wrapper">
				<div className="page3-title">Contacts</div>
				<div className="social-info">
					<div style={{display: "grid", gridGap: "10px", alignItems: "center"}}>
						<Links/>
						<Email/>
					</div>
				</div>
			</div>
		</section>
	)
}

Contacts.displayName="Contacts";