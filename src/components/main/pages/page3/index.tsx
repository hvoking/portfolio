// App imports
import { Left } from './left';
import { Right } from './right';
import './styles.scss';

export const Page3 = () => {
	return (
		<section id="page3" className="page3-wrapper">
			<div></div>
			<div className="page3">
				<Left/>
				<Right/>
			</div>
			<div></div>
		</section>
	)
}

Page3.displayName="Page3";