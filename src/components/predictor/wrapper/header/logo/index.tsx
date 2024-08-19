// App imports
import './styles.scss';

// Third-party imports
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
	const navigate = useNavigate();

	const onClick = () => {
		navigate('/');
	}
	
	return (
		<div className="logo-wrapper" onClick={onClick}>
			<img 
				className="logo" 
				src="static/logos/white.svg" 
				alt="logo"
				style={{paddingLeft: "20px"}}
			/>
			<div className="logo-text">
				URBAN GEOMETRIES
			</div>
		</div>
	)
}

Logo.displayName="Logo";