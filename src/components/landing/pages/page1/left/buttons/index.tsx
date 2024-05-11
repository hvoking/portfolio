// App imports
import { SVGArrow } from '../../../utils/arrow';
import './styles.scss';

export const Buttons = () => {
	const scrollToSection = (sectionId: any) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};
	
	return (
		<div className="buttons-wrapper">
			<button className="pages-primary-button" onClick={() => scrollToSection("page2")}>
				Explore My Work
				<SVGArrow fill="rgba(255, 255, 255, 1)" width="15" strokeWidth="1.6"/>
			</button>
			<button className="pages-secondary-button" onClick={() => scrollToSection("page4")}>
				Let's Talk
				<SVGArrow fill="rgba(0, 0, 0, 0.8)" width="15"/>
			</button>
		</div>
	)
}

Buttons.displayName="Buttons";