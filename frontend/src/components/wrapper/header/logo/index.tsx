// Third-party imports
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
	const navigate = useNavigate();
	const onClick = () => navigate('/')

	return (
		<div className="logo-wrapper" onClick={onClick}>
			<img 
				className="logo"
				src="static/logos/white.svg" 
				alt="header-logo"
			/>
			<div>
				<div className="logo-name">Gustavo Gonzalez</div>
				<div className="logo-profession">Computational Designer</div>
			</div>
		</div>
	)
}

Logo.displayName="Logo";