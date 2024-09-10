// App imports
import { Graphics } from './graphics';
import { Description } from './description';
import './styles.scss';

export const Results = () => {
	return (
		<div className="generativa-team-wrapper">
			<Graphics/>
			<Description/>
		</div>
	)
}

Results.displayName="Results";