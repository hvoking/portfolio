// App imports
import { Left } from './left';
import { Right } from './right';
import './styles.scss';

export const Page1 = () => {
	return (
		<section id="page1" className="page1-wrapper">
			<div></div>
			<div className="page1">
				<Left/>
				<Right/>
			</div>
			<div></div>
		</section>
	)
}

Page1.displayName="Page1";