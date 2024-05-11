// App imports
import './styles.scss';

// Context imports
import { useScroll } from '../../context/scroll';

// Third-party imports
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
	const { scrollToSection, currentSection } = useScroll();
	const navigate = useNavigate();

	const onClick = () => {
		scrollToSection("page1");
		navigate('/');
	}
	
	return (
		<div className="logo-wrapper" onClick={onClick}>
			<img 
				className="logo" 
				src="static/logos/white.svg" 
				alt="logo"
			/>
			<div className="logo-text">
				<div>
					<div className="logo-name">
						Gustavo Gonzalez
					</div>
					<div className="logo-profession">
						Computational Designer
					</div>
				</div>
			</div>
		</div>
	)
}

Logo.displayName="Logo";