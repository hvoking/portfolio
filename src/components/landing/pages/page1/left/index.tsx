// App imports
import { Buttons } from './buttons';
import { Description } from './description';
import { Headline } from './headline';
import { Email } from './email';
import './styles.scss';

export const Left = ({ parentRef }: any) => {
	return (
		<div className="page1-left" ref={parentRef}>
			<Headline/>
			<Description/>
			<Buttons/>
			<Email/>
		</div>
	)
}

Left.displayName="Left";