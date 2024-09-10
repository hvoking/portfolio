// App imports
import { Header } from './header';

export const Generativa = () => {
	return (
		<>
	    	<Header/>
	        <p style={{paddingLeft: "20px", paddingBottom: "5px", color: "rgba(0, 0, 0, 0.8)"}}>
	        	Led Computational Design Workflow Implementation
        	</p>
	        <ul className="resume-list">
	        	<li>
	        	    Delivered Data-Driven Insights: 
	        	    Developed an interactive dashboard 
	        	    that provided actionable insights for real estate agents 
	        	    by analyzing and interpreting complex data from 837 agencies, 
	        	    enabling informed decision-making processes;
	        	</li>
	        	<li>
	        		Optimized Geolocation Data: 
				    Transformed an underutilized database 
				    into a valuable asset for real estate analysis
				    by geolocating over 200,000 properties 
				    using Python geocoding libraries, 
				    resulting in a $40,000 cost-saving;
	        	</li>
	        	<li>
	        		Streamlined Zoning Analysis:
        	        Implemented a generative design algorithm 
        	        that instantly generates 3D representations 
        	        of zoning regulations based on lot geometry, 
        	        reducing the time architects spend on repetitive zoning tasks;
	        	</li>
	        	<li>
	        		Centralized Urban Data: 
	        		Facilitated comprehensive urban analysis
	        		by centralizing 16GB of public data from 24 municipalities, 
	        		integrating transportation, environmental features, and building information, 
	        		overcoming data limitations;
	        	</li>
	        	<li>
	        		Prototyped data visualizations 
	        		using parametrized SVG and D3.js, 
	        		effectively communicating complex information 
	        		through interactive charts and graphs
	        		ensuring cross-browser and multi-platform compatibility;
	        	</li>
	        	<li>
	        		Automated Data Transfers: 
	        		Slashed 2 hours of daily repetitive tasks 
	        		by integrating third-party databases 
	        		into PostgreSQL using ETL methodologies and task management with Celery, 
	        		significantly improving operational efficiency.
	        	</li>
	        	<li>
	 		       	Designed and implemented data visualizations 
	 		       	that transformed complex datasets 
	 		       	into easily understandable visuals, 
	 		       	facilitating better decision-making for clients.
	 		    </li>
	 		    <li>
	 		    	Generated rapid proof-of-concepts and working prototypes, 
	 		    	transitioning seamlessly from brainstorming sessions to implementation, 
	 		    	meeting tight deadlines.
	 		    </li>
	        	{/*
	        	<li>
	        		Developed a user-friendly interface 
	        		for a machine learning-driven property price calculator, 
	        		demonstrating proficiency in integrating complex algorithms into practical applications;
	        	</li>
	        	<li>Boosted API performance by 20% through the implementation of Redis cache;</li>
	        	<li>Implemented a vector tile server within PostgreSQL to deliver customizable styles;</li>
	        	<li>Improved address accuracy by 30% through the integration of Google Places APIs;</li>
	        	<li>Spearheaded remote collaboration with the startup Place digitalizing zone regulations;</li>
	        */}
	        </ul>
		</>			        
	)
}

Generativa.displayName="Generativa";