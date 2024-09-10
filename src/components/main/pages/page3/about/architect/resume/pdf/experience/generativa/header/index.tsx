// App imports
import { Arrow } from '../../../arrow';

export const Header = () => {
	return (
    	<div style={{display: "grid", gridTemplateColumns: "min-content auto"}}>
    		<Arrow/>
	        <div className="resume-job-header">
	            <div>COMPUTATIONAL DESIGNER</div>
	            <div>
		            <a 
		            	href="https://generativa.io/"
						target="_blank"
						rel="noopener noreferrer"
		            >
		            	Generativa Computational
		            </a> | 2021 - 2023
	            </div>
	        </div>
        </div>
	)
}

Header.displayName="Header";