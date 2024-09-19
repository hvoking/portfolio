// App imports
import './styles.scss';

// Context imports
import { useScroll } from '../../../context/scroll';

export const Logo = () => {
	const { scrollToSection } = useScroll();

	const onClick = () => {
		scrollToSection("page1");
	}
	
	return (
		<div className="logo-wrapper" onClick={onClick}>
			<img 
				className="logo" 
				src="static/logos/white.svg" 
				alt="logo"
			/>
			<div className="logo-text">
				Ugeom
			</div>
		</div>
	)
}

Logo.displayName="Logo";