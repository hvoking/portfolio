// React imports
import { useContext, createContext } from 'react';

// Context imports
import { useNeighboursApi } from '../../../api/neighbours';
import { useGeo } from '../../../filters/geo';

// Third-party imports
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { PolygonLayer } from 'deck.gl';

const NeighboursLayerContext: React.Context<any> = createContext(null);

export const useNeighboursLayer = () => {
	return (
		useContext(NeighboursLayerContext)
	)
}

export const NeighboursLayerProvider = ({children}: any) => {
	const { neighboursData } = useNeighboursApi();
	const { neighbourId, setNeighbourId } = useGeo();

	const onClick = (e: any) => { 
		setNeighbourId(e.object.neighbour_id);
	}

	const neighboursLayer = neighboursData &&
		new PolygonLayer({
			id: 'neighbours-polygon',
			data: neighboursData,
			pickable: true,
			stroked: true,
			wireframe: true,
			lineWidthMinPixels: 0.2,
			highlightColor: [255, 255, 255, 80],
			autoHighlight: true,
			getLineColor: [126, 126, 132, 255],
			getLineWidth: 12,
			getPolygon: (d: any) => d.geometry.coordinates[0],
			onClick: (onClick),
			getFillColor: (d: any) => 
				d.neighbour_id === neighbourId ? 
				[158, 108, 63, 180] :
				[180, 180, 80, 90],
			updateTriggers: {getFillColor: [neighbourId]},

		});

	return (
		<NeighboursLayerContext.Provider value={{ neighboursLayer }}>
			{children}
		</NeighboursLayerContext.Provider>
	)
}

NeighboursLayerContext.displayName = "NeighboursLayerContext";