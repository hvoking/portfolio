// App imports
import { Logo } from './logo';
import { Navigation } from './navigation';
import './styles.scss';

export const Header = () => {
	return (
		<div className="landing-header">
			<div></div>
			<div className="landing-navigation-wrapper">
				<Logo/>
				<Navigation/>
			</div>
			<div></div>
		</div>
		
	)
}

Header.displayName="Header";