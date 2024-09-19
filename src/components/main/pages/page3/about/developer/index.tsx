// App imports
import { ExtraTools } from './extra';
import { SVGArrow } from '../../../utils/arrow';

// Context imports
import { useVisibility } from '../../../../../context/visibility'

export const Developer = () => {
	const { extraTools, setExtraTools } = useVisibility();

	return (
		<>
			<div className="about-item">
				<div>
					<div className="tools-title">Developer</div>
					<div className="about-dates">2020-2024</div>
				</div>
				<div className="pages-description">
					Being comfortable with code enables me to rapidly prototype and validate experiences.
				</div>
				<div className="resume-button-wrapper">
					<button className="pages-secondary-button" onClick={() => setExtraTools(true)}>
						More Works
						<SVGArrow fill="rgba(0, 0, 0, 1)" width="15"/>
					</button>
				</div>
			</div>
			{extraTools && <ExtraTools setExtraTools={setExtraTools}/>}
		</>
	)
}

Developer.displayName="Developer";