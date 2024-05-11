// App imports
import { SVGWrapper } from './svg';
import './styles.scss';

// Context imports
import { useParcelListSizes } from '../../context/sizes/pdf/parcelList';

// Third-party imports
import * as d3 from 'd3';

export const Geom = ({ geom, address }: any) => {
	const { innerWidth, innerHeight } = useParcelListSizes();

	const currentGeom: any = {
	    "type": "MultiPolygon",
	    "crs": {
	        "type": "name",
	        "properties": {
	            "name": "EPSG:4326"
	        }
	    },
	    "coordinates": [geom]
	}

	const projection = d3.geoIdentity()
		.reflectY(true)
		.fitSize([ innerWidth, innerHeight ], currentGeom)

	const path = d3.geoPath(projection);

	return (
		<div className="parcel-geom-wrapper">
			<div className="parcel-geom">
				<SVGWrapper>
					<path
						fill="rgba(126, 126, 132, 0.4)"
						stroke="rgba(255, 255, 255, 1)" 
						strokeWidth={0.5}
						d={`${path(currentGeom)}`}
					/>
				</SVGWrapper>
			</div>
			<div className="parcel-address">{address}</div>
		</div>
	)
}