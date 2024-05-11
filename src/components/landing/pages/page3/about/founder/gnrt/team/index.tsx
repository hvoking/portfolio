// App imports
import { Graphics } from './graphics';
import { Description } from './description';
import './styles.scss';

export const Team = () => {
	return (
		<div className="generativa-team-wrapper">
			<Graphics/>
			<Description/>
		</div>
		
	)
}

Team.displayName="Team";