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
		<img 
			src={process.env.PUBLIC_URL + "/static/logos/logo.svg"} 
			alt="logo" 
			onClick={onClick}
			className="logo-image"
		/>
	)
}

Logo.displayName="Logo";