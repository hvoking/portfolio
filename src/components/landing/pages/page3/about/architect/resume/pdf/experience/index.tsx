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
	        	Led Computational Design Workflow Implementation: Utilized PostgreSQL for data management, Django for backend development, and React for user interfaces. Successfully deployed applications to AWS cloud with continuous integration, significantly improving project delivery times and system performance.
        	</p>
	        <ul className="resume-list">
	        	<li>
	        		Delivered Data-Driven Insights: Developed an interactive dashboard that provided actionable insights for real estate agents by visualizing classified data from 837 agencies, enhancing data interpretation and decision-making processes;
	        	</li>
	        	<li>
	        		Streamlined Zoning Analysis: Created a spatial analytics tool that generates instant 3D representations of zoning regulations based on lot geometry, reducing the time architects spend on repetitive zoning tasks and improving accuracy;
	        	</li>
	        	<li>
	        		Centralized Urban Data: Overcame data limitations by centralizing 16GB of urban data from 24 municipalities, integrating transportation, environmental features, and building information using web scraping and GIS tools, thus facilitating comprehensive urban planning analysis;
	        	</li>
	        	<li>
	        		Optimized Geolocation Data: Revitalized an underutilized database by implementing geolocation for over 200,000 properties, resulting in a $40,000 cost-saving and transforming the database into a valuable asset for real estate market analysis;
	        	</li>
	        	<li>
	        		Enhanced User Interfaces: Prototyped interactive and visually appealing interfaces using parametrized scalable vector graphics (SVG), ensuring cross-browser and multi-platform compatibility through the reuse of modular components;
	        	</li>
	        	<li>
	        		Automated Data Transfers: Automated 2 hours of daily repetitive tasks by integrating third-party databases into PostgreSQL using ETL methodologies and task management with Celery, significantly improving operational efficiency.
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