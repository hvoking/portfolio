// App imports
import './styles.scss';

// Context imports
import { usePdf } from '../../../../context/pdf';
import { useGoogleReverseApi } from '../../../..//context/api/google/reverse';
 
export const Favorites = ({ inputRef }: any) => {
	const { activePdf, setActivePdf } = usePdf();
	const { parcelsProperties } = useGoogleReverseApi();

	const onClick = () => {
		setActivePdf((prev: boolean) => !prev);
	}

	return (
		<div className="parcel-svg" onClick={ onClick }>
			<svg viewBox="0 0 37 40">
				<polygon 
			        fill={activePdf ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.2)"}
			        points={`4, 16 18, 16 22, 30 0, 30`}
			        stroke="rgba(255, 255, 255, 0.8)"
			        strokeDasharray="6 3"
			        strokeWidth={1}
			    />
			    <text
			    	x={35}
			    	y={15}
			    	fill={"rgba(255, 255, 255, 0.6)"}
			    	textAnchor="end"
			    	dominantBaseline="central"
			    >	
			    	{Object.keys(parcelsProperties).length}
			    </text>
			</svg>
		</div>
	)
}

Favorites.displayName="Favorites"