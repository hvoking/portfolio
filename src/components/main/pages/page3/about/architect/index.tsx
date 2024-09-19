// App imports
import { SVGArrow } from '../../../utils/arrow';
import { Resume } from './resume';

// Context imports
import { useVisibility } from '../../../../../context/visibility'

export const Architect = () => {
	const { activeResume, setActiveResume } = useVisibility();

	return (
		<>
			<div className="about-item">
				<div>
					<div className="tools-title">Architect</div>
					<div className="about-dates">2018-2020</div>
				</div>
				<div className="pages-description">
					Experience at  <span 
						onClick={() => window.open(`https://salum-wenz.com.py/`)}
						style={{
							color: "rgba(255, 255, 255, 1)",
							cursor: "pointer",
						}}
					>
					S&W
					</span>, an AEC firm. Budgeting, BIM Implementation & On-Site Construction.
				</div>
				<div className="resume-button-wrapper">
					<button className="pages-primary-button" onClick={() => setActiveResume(true)} >
						Read CV
						<SVGArrow fill="rgba(255, 255, 255, 1)" width="15" strokeWidth="1.6"/>
					</button>
				</div>
			</div>
			{activeResume && <Resume setActiveResume={setActiveResume}/>}
		</>
	)
}

Architect.displayName="Architect";