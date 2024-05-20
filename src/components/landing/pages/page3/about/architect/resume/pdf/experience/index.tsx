// App imports
import { Salum } from './salum';
import { Generativa } from './generativa';
import './styles.scss';

export const Experience = () => {
	return (
	    <div className="resume-experience-wrapper">
	    	<Generativa/>
        	<Salum/>
	    </div>
	)
}

Experience.displayName="Experience";