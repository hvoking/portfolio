// App imports
import { Team } from './team';
import { Challenge } from './challenge';
import { Results } from './results';
import { Place } from './place';
import { Conclusion } from './conclusion';
import { CancelCross } from '../../../../utils/cross';
import './styles.scss';

export const Gnrt = ({ setActiveGnrt }: any) => {
	const onClick = () => setActiveGnrt(false);
	return (
		<div className="generativa-wrapper">
			<div onClick={onClick}></div>
			<div className="founder-wrapper">
				<CancelCross onClick={onClick}/>
				<Team/>
				<div className="pages-subtitle" 
					style={{
						color: "rgba(0, 0, 0, 1)", 
						whiteSpace: "normal", 
						backgroundColor: "rgba(243, 243, 243)",
						paddingTop: "10px",
						paddingBottom: "10px",
						fontWeight: 700,
					}}
				>
					Imoveis SC + Generativa
				</div>
				<Challenge/>
				<Results/>
				<div 
					className="pages-subtitle" 
					style={{
						color: "rgba(0, 0, 0, 1)", 
						whiteSpace: "normal",
						backgroundColor: "rgba(243, 243, 243)",
						paddingTop: "10px",
						paddingBottom: "10px",
						fontWeight: 700,
					}}
				>
					Place + Generativa
				</div>
				<Place/>
				<Conclusion/>
			</div>
			<div onClick={onClick}></div>
		</div>
	)
}

Gnrt.displayName="Gnrt";