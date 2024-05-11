// Context import
import { useLotApi } from '../../../../context/api/parcel/lot';

export const Legend = ({ innerHeight }: any) => {
	const { lotData } = useLotApi();
	const parcelArea = lotData ? lotData.parcel_area : "";

	return (
		<text
			x={0}
			y={innerHeight}
			fill="rgba(255, 255, 255, 0.6)"
			fontSize="0.8em"
			alignmentBaseline="after-edge"
		>
			area: {parcelArea} m²
		</text>
	)
}

Legend.displayName="Legend";