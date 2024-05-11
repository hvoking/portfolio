// App imports
import { SVGArrow } from '../../../../../../utils/arrow'

export const Description = () => {
	return (
		<div style={{display: "grid", gridTemplateRows: "repeat(3, min-content) auto"}}>
			<div className="pages-subtitle" style={{color: "rgba(0, 0, 0, 1)"}}>Results</div>
			<p style={{margin: "0"}}>
				We Centralize property information in a user-friendly platform, with interactive features
				to help Real Estate agents gain a comprehensive view of the market in real time.
			</p>
			<div className="pages-subtitle" style={{color: "rgba(0, 0, 0, 1)"}}>Roles</div>
			<p style={{margin: "0"}}>
				Alessandro: Market approximation and legal support; 
				Denis (CEO): Strategic direction, backend development and visual identity;
				Gustavo (CTO): System architecture, frontend development and backend support.
			</p>
			<div style={{display: "flex", gap: "10px"}}>
				<button className="pages-secondary-button" onClick={() => window.open(`https://ugeom.com/#/m2b`)}>
					Visit Website
					<SVGArrow fill="rgba(0, 0, 0, 1)" width="15"/>
				</button>
				<button className="pages-primary-button" onClick={() => window.open(`https://ugeom.com`)}>
					Visit Landing Page
					<SVGArrow fill="rgba(255, 255, 255, 1)" width="15" strokeWidth="1.6"/>
				</button>
			</div>
		</div>
	)
}

Description.displayName="Description";