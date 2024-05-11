// App imports
import { Favorites } from "./favorites";
import './styles.scss'

// Context imports
import { useGoogleReverseApi } from '../../../context/api/google/reverse';
import { useParcelsApi } from '../../../context/api/geom/parcels';
import { useGeo } from "../../../context/filters/geo";
import { useStyleSheet } from "../../../context/filters/stylesheet";

export const Header = () => {
	const { currentAddress, parcelsProperties, setParcelsProperties } = useGoogleReverseApi();
	const { parcelsData } = useParcelsApi();
	const { parcelId } = useGeo();
	const { linesColor } = useStyleSheet();

		const onClick = () => {
			const currentParcel = parcelsData.filter((item: any) => item.id === parcelId);
			const currentGeom = currentParcel.length > 0 ? currentParcel[0].geometry.coordinates[0] : null;

			if (!(parcelId in parcelsProperties)) {
				setParcelsProperties({
					...parcelsProperties, [parcelId] : {
						...parcelsProperties[parcelId],
						"geom": currentGeom,
						"address": currentAddress
					}
				}) 
			}
			else {
			    let state = {...parcelsProperties};
			    delete state[parcelId];
			    setParcelsProperties(state);
			}
		}

	return (
		<div className="parcel-header">
			<div className="title-wrapper-style">
				<div>Selected parcel</div>
			</div>
			<div className="add-favorites-wrapper">
				<Favorites/>
				<div 
					className="add-symbol" 
					onClick={onClick}
					style={{
						color: parcelId in parcelsProperties ? 
						"rgba(255, 0, 0, 1)" : 
						`${linesColor}`,
						fontSize: parcelId in parcelsProperties ? 
						"1.3em" : 
						"1.6em"
					}}
				>
					{parcelId in parcelsProperties ? "x" : "+"}
				</div>
			</div>
		</div>
	)
}

Header.displayName="Header";