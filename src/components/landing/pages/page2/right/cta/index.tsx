// App imports
import { SVGArrow } from '../../../utils/arrow';

// Context imports
import { useWorks } from '../../../../context/works'

export const CTA = () => {
	const { currentWork } = useWorks();

	const onClick= () => {
		if (currentWork === "jukka") {
			window.open(`${window.location.origin}/#/parcels`)
		}
		else if (currentWork === "m2b") {
			window.open(`https://generativa.io/#/m2b`)
		}
		else if (currentWork === "grass") {
			window.open(`https://github.com/hvoking/grasshopper`)
		}
	};

	return (
		<button className="pages-primary-button" onClick={onClick}>
			{ currentWork === "grass" ? "View Repository" : "Visit Website"}
			<SVGArrow fill="rgba(255, 255, 255, 1)" width="15"/>
		</button>
	)
}

CTA.displayName="CTA";