// App imports
import { Header } from './header';
import { Pages } from './pages';
import { Contacts } from './contacts'; 
import './styles.scss';

// Context imports
import { LandingProvider } from '../context';

export const Main = () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
	
	return (
		<LandingProvider>
			<div className="landing">
				<Header/>
				<Pages/>
				<Contacts/>
			</div>
		</LandingProvider>
	)
}

Main.displayName="Main";