// App imports
import { About } from './about';
import { Tools } from './tools';
import './styles.scss';

export const Page3 = () => {
	return (
		<section id="page3" className="page3-wrapper">
			<div></div>
			<div className="page3">
				<About/>
				<Tools/>
			</div>
			<div></div>
		</section>
	)
}

Page3.displayName="Page3";