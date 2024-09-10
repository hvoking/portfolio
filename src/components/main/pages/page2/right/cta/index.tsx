// App imports
import { SVGArrow } from '../../../utils/arrow';

// Context imports
import { useWorks } from '../../../../context/works'

export const CTA = () => {
	const { currentWork } = useWorks();

	const onClick= () => {
		if (currentWork === "jukka") {
			window.open(`https://hvoking.github.io/zone/`)
		}
		else if (currentWork === "m2b") {
			window.open(`https://generativa.io/#/m2b`)
		}
		else if (currentWork === "airbnb") {
			window.open(`https://ugeom.com`)
		}
	};

	return (
		<button className="pages-primary-button" onClick={onClick}>
			Visit Website
			<SVGArrow fill="rgba(255, 255, 255, 1)" width="15"/>
		</button>
	)
}

CTA.displayName="CTA";