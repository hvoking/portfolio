// App imports
import { Left } from './left';
import { Right } from './right';
import './styles.scss';

export const Page4 = () => {
	return (
		<section id="page4" className="page4-wrapper">
			<div></div>
			<div className="page4">
				<Left/>
				<Right/>
			</div>
			<div></div>
		</section>
	)
}

Page4.displayName="Page4";