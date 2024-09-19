// App imports
import { SVGArrow } from '../../../utils/arrow'

import { Gnrt } from './gnrt';

// Context imports
import { useVisibility } from '../../../../../context/visibility'

export const Founder = () => {
	const { activeGnrt, setActiveGnrt } = useVisibility();

	return (
		<>
			<div className="about-item">
				<div>
					<div className="tools-title">Founder</div>
					<div className="about-dates">2021-2023</div>
				</div>
				<p className="pages-description">
					Co-founded <span 
						onClick={() => setActiveGnrt(true)} 
						style={{
							color: "rgba(255, 255, 255, 1)",
							cursor: "pointer",
						}}
					>
					Generativa
					</span>, a startup dedicated to enhancing processes for Real Estate Agents.
			  	</p>
			  	<div className="resume-button-wrapper">
				  	<button className="pages-secondary-button" onClick={() => setActiveGnrt(true)}>
						About Generativa
						<SVGArrow fill="rgba(0, 0, 0, 1)" width="15"/>
					</button>
				</div>
			</div>
			{activeGnrt && <Gnrt setActiveGnrt={setActiveGnrt}/>}
		</>
	)
}

Founder.displayName="Founder";