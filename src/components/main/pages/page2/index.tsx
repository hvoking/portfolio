// App imports
import { Cards } from './cards';
import { Info } from './info';
import './styles.scss';

export const Page2 = () => {
	return (
		<section id="page2" className="page2-wrapper">
			<div></div>
				<Cards/>
				{/*<Info/>*/}
			<div></div>
		</section>
	)
}

Page2.displayName="Page2";