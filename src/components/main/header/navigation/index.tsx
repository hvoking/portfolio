// App imports
import { NavLink } from './link';
import './styles.scss';

export const Navigation = () => {
	return (
		<nav className="landing-navigation">
			<NavLink page="page1" title="Home"/>
			<NavLink page="page2" title="Portfolio"/>
			<NavLink page="page3" title="Contact"/>
		</nav>
	)
}

Navigation.displayName="Navigation";
