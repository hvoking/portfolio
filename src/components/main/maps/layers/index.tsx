// Layer imports
import { useParcels } from '../../context/maps/layers/parcels';
import { useEnvelop } from '../../context/maps/layers/envelop';
import { useDrain } from '../../context/maps/layers/drain';
import { useCurves } from '../../context/maps/layers/curves';
import { usePolygonLayer } from '../../context/maps/layers/polygon';
import { useBuildingLayer } from '../../context/maps/layers/building';

// Third-party imports
import { useControl } from 'react-map-gl';
import { MapboxOverlay } from '@deck.gl/mapbox/typed';
import { DeckProps } from '@deck.gl/core/typed';

const DeckGLOverlay = (props: DeckProps) => {
  const deck = useControl<any>(() => new MapboxOverlay(props));
  deck.setProps(props);
  return null;
}

export const Layers = () => {
	const { parcelsPolygon } = useParcels();
	const { polygonLayer } = usePolygonLayer();
	const { curvesLayer } = useCurves();
	const { drainLayer } = useDrain();
	const { envelopLayer } = useEnvelop();
	const { buildingLayer } = useBuildingLayer();

	const layers = [ 
		polygonLayer, 
		parcelsPolygon,
		drainLayer,
		curvesLayer,
		buildingLayer,
		envelopLayer,
	];

	return (
		<DeckGLOverlay layers={layers}/>
	)
}

Layers.displayName="Layers";