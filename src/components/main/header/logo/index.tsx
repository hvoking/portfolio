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
			<img 
				src={process.env.PUBLIC_URL + "/static/logos/logo.svg"} 
				alt="logo" 
				height="50px"
			/>
		</div>
	)
}

Logo.displayName="Logo";