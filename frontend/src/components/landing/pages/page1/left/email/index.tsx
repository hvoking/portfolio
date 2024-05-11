// App imports
import { Available } from './available';
import { Copy } from './copy';

export const Email = () => {
	return (
		<div className="email-wrapper">
			<Available/>
			<button className="pages-secondary-button" style={{display: "flex", gap: "5px"}}>
				<div>gus@ugeom.com</div>
				<Copy/>
			</button>
		</div>
	)
}

Email.displayName="Email";