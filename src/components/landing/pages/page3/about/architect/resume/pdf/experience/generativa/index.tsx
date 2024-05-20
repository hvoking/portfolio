// App imports
import { Arrow } from '../../arrow';

export const Generativa = () => {
	return (
		<>
	    	<div style={{display: "grid", gridTemplateColumns: "min-content auto" }}>
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
	        <p style={{paddingLeft: "20px", paddingBottom: "5px", color: "rgba(0, 0, 0, 0.8)"}}>
	        	Led Computational Design Workflow Implementation: Utilized PostgreSQL for data management, Django for backend development, and React for user interfaces. Successfully deployed applications to AWS cloud with continuous integration, significantly improving project delivery times and system performance.
        	</p>
	        <ul className="resume-list">
	        	<li>
	        		Delivered Data-Driven Insights: 
	        		Developed an interactive dashboard 
	        		that provided actionable insights 
	        		for real estate agents 
	        		by visualizing classified data 
		        	from 837 agencies, 
		        	enhancing data interpretation and decision-making processes;
	        	</li>
	        	<li>
	        		Streamlined Zoning Analysis: 
	        		Created a spatial analytics tool 
	        		that generates instant 3D representations 
	        		of zoning regulations based on lot geometry, 
	        		reducing the time architects spend on repetitive zoning tasks 
	        		and improving accuracy;
	        	</li>
	        	<li>
	        		Centralized Urban Data: 
	        		Overcame data limitations 
	        		by centralizing 16GB of urban data from 24 municipalities, 
	        		integrating transportation, environmental features, and building information 
	        		using web scraping and GIS tools, 
	        		thus facilitating comprehensive urban planning analysis;
	        	</li>
	        	<li>
	        		Optimized Geolocation Data: 
	        		Revitalized an underutilized database 
	        		by implementing geolocation for over 200,000 properties, 
	        		resulting in a $40,000 cost-saving 
	        		and transforming the database into a valuable asset 
	        		for real estate market analysis;
	        	</li>
	        	<li>
	        		Enhanced User Interfaces: 
	        		Prototyped interactive and visually appealing interfaces 
	        		using parametrized scalable vector graphics (SVG), 
	        		ensuring cross-browser and multi-platform compatibility 
	        		through the reuse of modular components;
	        	</li>
	        	<li>
	        		Automated Data Transfers: 
	        		Slashed 2 hours of daily repetitive tasks 
	        		by integrating third-party databases into PostgreSQL 
	        		using ETL methodologies and task management with Celery, 
	        		significantly improving operational efficiency.
	        	</li>
	        	{/*
	        	<li>Enabled a user-friendly interface for a machine learning-driven property price calculator.</li>
	        	<li>Boosted API performance by 20% through the implementation of Redis cache;</li>
	        	<li>Implemented a vector tile server within PostgreSQL to deliver customizable styles;</li>
	        	<li>Improved address accuracy by 30% through the integration of Google Places APIs;</li>
	        	<li>Overcame data limitations by aggregating extensive public data;</li>*/}
	        </ul>
		</>			        
	)
}

Generativa.displayName="Generativa";