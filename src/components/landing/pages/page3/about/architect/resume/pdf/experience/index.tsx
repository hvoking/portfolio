// App imports
import { Arrow } from '../arrow';
import './styles.scss';

export const Experience = () => {
	return (
	    <div className="resume-experience-wrapper">
	    	<div style={{display: "grid", gridTemplateColumns: "min-content auto" }}>
	    		<Arrow/>
		        <div className="resume-job-header">
		            <div>CHIEF TECHNOLOGY OFFICER</div>
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
	        <ul className="resume-list">
	        	<li>Generated automatic representations of zone regulations in specific locations;</li>
	        	<li>Geolocated over 200.000 properties, saving $40,000 at 20 cents per point;</li>
	        	<li>Managed application deployment on AWS cloud with continuous integration;</li>
	        	<li>Offered actionable insights by analyzing data from 837 real estate agencies;</li>
	        	<li>Prototyped interactive interfaces with sharp graphics using parameterized SVG;</li>
	        	<li>Slashed 2 hours of repetitive tasks daily by automating data transfers;</li>
	        	<li>Predicted property prices with a location-based machine learning calculator.</li>
	        	{/*<li>Boosted API performance with Redis cache implementation;</li>
	        	<li>Delivered customizable map styles by implementing a vector tile server;</li>
	        	<li>Enhanced address accuracy by 30% through Google Places APIs integration;</li>
	        	<li>Overcame data limitations by aggregating extensive public data;</li>*/}
	        </ul>
        	<div style={{display: "grid", gridTemplateColumns: "min-content auto" }}>
	        	<Arrow/>
	        	<div className="resume-job-header">
	            <div>TECHNICAL COORDINATOR</div>
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
	        <ul className="resume-list">
	            <li>Leverage BIM tools to ensure seamless coordination among project stakeholders;</li>
	            <li>Supervised on-site construction ensuring strict adherence to project plans and timelines;</li>
	        	<li>Reduced quantification time through BIM methodologies and budget simulation scripts;</li>
	        	<li>Collaborated with architects and engineers to create project budgets and financial forecasts.</li>
	        </ul>
	    </div>
	)
}

Experience.displayName="Experience";