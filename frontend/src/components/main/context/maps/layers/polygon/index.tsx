// React imports
import { useContext, createContext } from 'react';

// Context imports
import { usePolygonDimensions } from '../../../filters/dimensions/polygon';
import { useStyleSheet } from '../../../filters/stylesheet';

// Third-party imports
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { GeoJsonLayer } from 'deck.gl';

const PolygonLayerContext: React.Context<any> = createContext(null);

export const usePolygonLayer = () => {
	return (
		useContext(PolygonLayerContext)
	)
}

export const PolygonLayerProvider = ({children}: any) => {
	const { polygonGeometry } = usePolygonDimensions();
	const { fillColor } = useStyleSheet();

	const polygonFill = fillColor.replace("rgba(", "").replace(")", "").split(",")
	
	polygonFill[3] = 20;

	const polygonLayer = polygonGeometry &&
		new GeoJsonLayer({
			id: 'polygon-geojson',
			data: polygonGeometry.features[0].geometry,
			getFillColor: polygonFill.map((item: any) => parseInt(item)),
			getLineColor: [126, 126, 132, 80],
			getLineWidth: 1,
			parameters: { depthTest: false },
		});

	return (
		<PolygonLayerContext.Provider value={{ polygonLayer }}>
			{children}
		</PolygonLayerContext.Provider>
	)
}

PolygonLayerContext.displayName = "PolygonLayerContext";