// App imports
import { Tool } from './tool';
import './styles.scss';

export const Tools = () => {
	return (
		<div className="skills-wrapper">
			<div style={{display: "grid", gridGap: "10px"}}>
				<div className="tools-title">Tech Stack</div>
				<div className="tool-list"> 
					<Tool title="typescript"/>
					<Tool title="python"/>
					<Tool title="react"/>
					<Tool title="django"/>
					<Tool title="postgres"/>
					<Tool title="aws"/>
				</div>
			</div>
		</div>
	)
}

Tools.displayName="Tools";