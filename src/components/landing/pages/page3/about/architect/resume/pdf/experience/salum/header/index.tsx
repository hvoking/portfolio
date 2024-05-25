// App imports
import { Arrow } from '../../../arrow';

export const Header = () => {
	return (
    	<div style={{display: "grid", gridTemplateColumns: "min-content auto" }}>
        	<Arrow/>
        	<div className="resume-job-header">
            	<div>CONSTRUCTION BUDGETING ARCHITECT</div>
	            <div>
		            <a 
		            	href="https://www.instagram.com/salumywenzpy/"
						target="_blank"
						rel="noopener noreferrer"
		            >
		            	Salum y Wenz 
		            </a> | 2018 - 2020
	            </div>
    		</div>
    	</div>
	)
}

Header.displayName="Header";