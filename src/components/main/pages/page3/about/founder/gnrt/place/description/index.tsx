// App imports
import { PagesLink } from '../../../../../../utils/link';

export const Description = () => {
	return (
		<div className="generativa-description">
			<div className="pages-subtitle" style={{color: "rgba(0, 0, 0, 1)"}}>Peers</div>
			<p style={{margin: "0"}}>
				Initially, our aim was to create a tool to evaluate project viability. 
				However, upon finding a similar effort by another group of young architects, 
				we decided to join forces and collaborate.
			</p>
			<div className="pages-subtitle" style={{color: "rgba(0, 0, 0, 1)"}}>Place</div>
			<p style={{margin: "0"}}>
				<PagesLink href="https://www.ospa.place/" text="PLACE"/> is a startup within 
				the <PagesLink href="https://www.ospa.com.br/" text="OSPA"/> group, 
				boasting a strong presence in São Paulo and Porto Alegre. 
			</p>
			<div className="pages-subtitle" style={{color: "rgba(0, 0, 0, 1)"}}>Roles</div>
			<p style={{margin: "0"}}>
				Our role involves handling backend work and implementing their tool in Blumenau.
			</p>
		</div>
	)
}

Description.displayName="Description";