// App imports
import { Graphics } from './graphics';
import { Description } from './description';

export const Place = () => {
	return (
		<div className="generativa-team-wrapper">
			<Description/>
			<Graphics/>
		</div>
	)
}

Place.displayName="Place";