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
		<div className="logo-text" onClick={onClick}>
			ugeom
		</div>
	)
}

Logo.displayName="Logo";