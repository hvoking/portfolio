// App imports
import './styles.scss';

export const Tool = ({ title }: any) => {
	return (
		<div className="tool-icon-wrapper">
			<img 
				className="tool-icon"
				src={process.env.PUBLIC_URL + `/static/tools/${title}.svg`}
				alt={title}
			/>
			<div className="tool-title">
				{title}
			</div>
		</div>
	)
}

Tool.displayName="Tool";