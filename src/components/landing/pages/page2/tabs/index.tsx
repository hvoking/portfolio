// App imports
import './styles.scss';

// Context imports
import { useWorks } from '../../../context/works';

export const Tabs = ({ description, theme, setTheme }: any) => {
	const tabs = Object.keys(description);

	const onClick = (item: any) => {
		setTheme(item);
	}

	return (
		<div className="tab-buttons-wrapper">
			{
				tabs.map((item: any) => {
				return (
					<button 
						style={{
							backgroundColor: theme === item ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.2)",
							color: theme === item ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)",
						}}
						className="tab-button" 
						onClick={() => onClick(item)}
					>
						{item}
					</button>
				)
			})}
		</div>	
	)
}

Tabs.displayName="Tabs";