// App imports
import { CTA } from './cta';
import './styles.scss';

export const Right = ({ description, theme}: any) => {
	return (
		<div className="slider-description-wrapper">
			<div className="slider-description">
				<div className="tools-title">
					{theme}
				</div>
				<div className="pages-description">
					{`${description[theme]}`}
				</div>
				
			</div>
			<CTA/>
		</div>
	)
}

Right.displayName="Right";