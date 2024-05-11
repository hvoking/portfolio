// App imports
import './styles.scss';

export const Tool = ({ title }: any) => {
	return (
		<div className="tool-icon-wrapper">
			<img 
				className="tool-icon"
				src={`static/components/landing/tools/${title}.svg`}
				alt={title}
			/>
			<div className="tool-title">
				{title}
			</div>
		</div>
	)
}

Tool.displayName="Tool";