// App imports
import { Architect } from './architect';
import { Founder } from './founder';
import { Developer } from './developer';
import './styles.scss';

export const About = () => {
	return (
		<div className="about-wrapper">
			<Architect/>
			<Founder/>
			<Developer/>
		</div>
	)
}

About.displayName="About";