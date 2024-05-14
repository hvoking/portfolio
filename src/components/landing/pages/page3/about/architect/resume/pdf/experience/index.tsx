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
	        <p style={{paddingLeft: "20px", paddingBottom: "10px"}}>
	        	Drove the implementation of computational design workflows. 
        		Utilizing PostgreSQL for data management, 
        		Django for backend development, 
        		and React for dynamic user interfaces.
        		Successfully deploying applications to the AWS cloud with continuous integration.
        	</p>
	        <ul className="resume-list">
	        	<li>
	        		Created web application 
	        		utilized by real estate agents, 
	        		providing actionable insights 
	        		through the analysis of data collected from 837 real estate agencies;
	        	</li>
	        	<li>
	        		Developed a spatial analytics tool 
	        		that provides a 3D representation of zone regulations, 
	        		facilitating zoning analysis processes 
	        		for architects who perform this as a repetitive task;
	        	</li>
	        	<li>
	        		Gathered and Centralized urban data, 
	        		including transportation, environmental features, and buildings, 
	        		using web scraping, OpenStreetMap, and GIS tools;
	        	</li>
	        	<li>
	        		Revitalized an underutilized database 
	        		by implementing geolocation for over 200K properties, each with comprehensive metadata, 
	        		and seamlessly visualized them on interactive maps 
	        		leveraging technologies such as Mapbox and Deck.gl;
	        	</li>
	        	<li>
	        		Prototyped interactive interfaces with sharp graphics 
	        		using parameterized scalable vector graphics SVG,
	        		optimizing cross-browser and multi-platform compatibility 
	        		by reusing modular components and sharing between projects;
	        	</li>
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
	            <div>BUDGETING ARCHITECT</div>
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
	        	<li>
	            	Collaborated with architects and engineers to create precise budget projections 
	            	for projects ranging from residential scale to significant developments, 
	            	ensuring a comprehensive understanding of all aspects of each project;
	            </li>
	        	<li>
	        		Facilitated interdisciplinary integration 
	        		by incorporating BIM methodologies into project workflows, 
	        		with parametric modeling and budget simulation 
	        		using Revit, Dynamo, and Navisworks;
	        	</li>
	        	<li>
	        		Supervised activities in the construction of a 9900 square meter project, 
	        		to ensure adherence to project plans, timelines, specifications, and quality standards;
	        	</li>
	        </ul>
	    </div>
	)
}

Experience.displayName="Experience";