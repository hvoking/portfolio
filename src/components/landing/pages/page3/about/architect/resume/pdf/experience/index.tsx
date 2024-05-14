// App imports
import { Arrow } from '../arrow';
import './styles.scss';

export const Experience = () => {
	return (
	    <div className="resume-experience-wrapper">
	    	<div style={{display: "grid", gridTemplateColumns: "min-content auto" }}>
	    		<Arrow/>
		        <div className="resume-job-header">
		            <div>FULL STACK DEVELOPER</div>
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
	        <p style={{paddingLeft: "20px", paddingBottom: "10px", color: "rgba(0, 0, 0, 0.8)"}}>
	        	Drove the implementation of computational design workflows. 
        		Utilizing PostgreSQL for data management, 
        		Django for backend development, 
        		and React for user interfaces.
        		Successfully deploying applications to the AWS cloud with continuous integration.
        	</p>
	        <ul className="resume-list">
	        	<li>
	        		Provided actionable insights 
	        		to real estate agents 
	        		through an interactive dashboard 
	        		for visualizing classified data
	        		collected from 837 real estate agencies;
	        	</li>
	        	<li>
	        		Developed a spatial analytics tool 
	        		that instantly generates a 3D representation of zone regulations, 
	        		facilitating zoning analysis
	        		for architects who perform this task repetitively;
	        	</li>
	        	<li>
	        		Overcame data limitations by centralizing 16GB of urban data from 24 municipalities,
	        		including transportation, environmental features, and buildings, 
	        		using web scraping and GIS tools;
	        	</li>
	        	<li>
	        		Revitalized an underutilized database 
	        		by implementing geolocation for over 200K properties,
	        		each with comprehensive metadata, 
	        		resulting in a cost-saving of $40,000 at 20 cents per point;
	        	</li>
	        	<li>
	        		Prototyped sharp and interactive interfaces, 
	        		using parametrized scalable vector graphics (SVG), 
	        		optimizing cross-browser and multi-platform compatibility 
	        		by reusing modular components.
	        	</li>
	        	<li>
	        		Slashed 2 hours of daily repetitive tasks 
	        		by automating data transfers, 
	        		integrating third-party databases into PostgreSQL 
	        		via ETL methodologies, 
	        		and utilizing Celery for task management;
	        	</li>
	        	{/*
	        	<li>Enabled a user-friendly interface for a machine learning-driven property price calculator.</li>
	        	<li>Boosted API performance by 20% through the implementation of Redis cache;</li>
	        	<li>Implemented a vector tile server within PostgreSQL to deliver customizable styles;</li>
	        	<li>Improved address accuracy by 30% through the integration of Google Places APIs;</li>
	        	<li>Overcame data limitations by aggregating extensive public data;</li>*/}
	        </ul>
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
	        <p style={{paddingLeft: "20px", paddingBottom: "10px", color: "rgba(0, 0, 0, 0.8)"}}>
	        	Collaborated with architects and engineers 
	        	to create accurate budget estimates for diverse projects, 
	        	ranging from residential to significant industrial and commercial developments, 
	        	ensuring a comprehensive understanding of all aspects of each project.
        	</p>
	        <ul className="resume-list">
	        	<li>
	        		Streamlined construction workflows 
	        		by minimizing interdisciplinary integration errors, 
	        		effectively mitigating potential setbacks, 
	        		and enhancing overall project success;
	        	</li>
	        	<li>
	        		Integrated Building Information Modeling (BIM) methodologies into project workflows, 
	        		utilizing tools like Revit, Dynamo, and Navisworks 
	        		for parametric modeling and budget simulation;
	        	</li>
	        	<li>
	        		Supervised construction activities for a 9900 square meter project, 
	        		ensuring adherence to project plans, specifications, and quality standards 
	        		within established timelines.
	        	</li>
	        </ul>
	    </div>
	)
}

Experience.displayName="Experience";