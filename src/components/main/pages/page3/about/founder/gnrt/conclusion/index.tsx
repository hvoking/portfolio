import { Description } from './description';
import { Graphics } from './graphics';

export const Conclusion = () => {
	return (
		<div className="generativa-team-wrapper" style={{justifyItems: "center", height: "100%"}}>
			<Graphics/>
			<Description/>
		</div>
	)
}

Conclusion.displayName="Conclusion";