// App imports
import { Header } from './header';

export const Salum = () => {
	return (
		<>
        	<Header/>
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
	    </>
	)
}