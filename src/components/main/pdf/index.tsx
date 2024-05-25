// App imports
import { Geom } from './geom';
import './styles.scss';

// Context imports
import { useGoogleReverseApi } from '../context/api/google/reverse';
import { useVisibility } from '../context/filters/visibility';

export const Pdf = () => {
	const { parcelsProperties } = useGoogleReverseApi();
	const { activePdf, setActivePdf } = useVisibility();
	const parcelsLength = Object.keys(parcelsProperties).length;

	let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	return (
		<>
			{activePdf && 
				<div 
					className="pdf-wrapper"
					onClick={() => setActivePdf(false)}
					tabIndex={0}
				>
					<div className="pdf-page1-wrapper">
						<div className="pdf-title">Parcel Portfolio Overview</div>
						<div className="parcel-list-title">
							Selected parcels: {parcelsLength} {parcelsLength === 1  ? "parcel" : "parcels"}
						</div>
						<div className="parcel-list">
							{Object.values(parcelsProperties).map((item: any, index: any) => {
								return (
									<Geom 
										key={index} 
										geom={item.geom}
										address={item.address}
									/>
								)
							})}
						</div>
						<div className="download-button-wrapper">
							<div className="download-button">
								download pdf
							</div>
						</div>
					</div>
				</div>
			}
		</>
	)
}

Pdf.displayName="Pdf";