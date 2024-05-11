// App imports
import { PagesLink } from '../../../../../../utils/link';

export const Description = () => {
	return (
		<div className="generativa-description">
			<div className="pages-subtitle" style={{color: "rgba(0, 0, 0, 1)"}}>Team</div>
			<p style={{margin: "0"}}>
				Central to this narrative are three key characters: 
				the two founders, Denis and myself, driven by our shared vision; 
				and Alessandro, a seasoned entrepreneur with invaluable experience.
			</p>
			<div className="pages-subtitle" style={{color: "rgba(0, 0, 0, 1)"}}>Learning</div>
			<p style={{margin: "0"}}>
				Denis and I, colleagues from Architecture School, 
				with aligned minds and a shared passion for learning, 
				were exploring methods for data visualization during the pandemic.
			</p>
			<div className="pages-subtitle" style={{color: "rgba(0, 0, 0, 1)"}}>Opportunity</div>
			<p style={{margin: "0"}}>
				At that time, <PagesLink href="https://www.imoveis-sc.com.br/" text="Imoveis SC"/>, 
				the leading Real Estate platform in Santa Catarina founded by Alessandro, 
				showed interest in our prototypes. <br/>
			</p>
			<div className="pages-subtitle" style={{color: "rgba(0, 0, 0, 1)"}}>Collaboration</div>
			<p style={{margin: "0"}}>
				They possessed a vast database, 
				while we possessed the skills to extract value from it.
				Recognizing the potential synergy, we formed a strategic partnership
				and Generativa was born.  
			</p>
		</div>
	)
}

Description.displayName="Description";