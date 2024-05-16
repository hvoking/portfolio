// App imports
import { IsoPolygonSVG } from './isoPolygon';
import './styles.scss';

// Context imports
import { useIsoApi } from '../context/api/iso';
import { useGeo } from '../context/filters/geo';

export const Left = () => {
	const { isoData } = useIsoApi();
	const { cityName } = useGeo();
	const isochroneArea = isoData && Math.round((isoData[0].polygon_area / 1000) * 100) / 100;

	return (
		<div className="left-wrapper">
			<div className="explorer">
				<div className="numbers-wrapper">
					{isochroneArea && 
						<>
							<div className="explorer-info-wrapper">
								<div className="numbers">
									<div className="numbers-title">Study Area</div>
									<div className="numbers-subtitle">City of {cityName}</div>
								</div>
								<div className="numbers">
									<div className="numbers-title">Isochrone Area</div>
									<div className="numbers-subtitle">{isochroneArea ? isochroneArea : "0.0"} km²</div>
								</div>
							</div>
							<div className="geojson-wrapper">
								<IsoPolygonSVG/>
							</div>
						</>
					}
				</div>
			</div>
		</div>
	)
}

Left.displayName="Left";