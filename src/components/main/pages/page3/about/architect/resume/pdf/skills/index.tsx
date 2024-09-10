// App imports
import './styles.scss';

export const Skills = () => {
	return (
        <div>
            <div className="resume-inner-title">SKILLS</div>
            <div className="resume-small-division"></div>
    	    <ul className="skills-list">
    	        <li>Backend: Python, Django, Postgres;</li>
                <li>Frontend: TypeScript, React;</li>
                <li>Data Visualization: D3, Three.js;</li>
                <li>AWS: S3, VPC, RDS, EC2, ECS, ECR;</li>
                <li>GIS: QGIS, ArcGIS, PostGIS;</li>
                <li>Visual Programming: Grasshopper, Dynamo;</li>
                <li>BIM: Revit, Archicad, Navisworks;</li>
                <li>Other: Celery, Redis, Mapbox, Deck.gl.</li>
    	    </ul>
        </div>
	)
}

Skills.displayName="Skills";