// App imports
import { Card } from './card';
import './styles.scss';

// Context imports
import { useWorks } from '../../../context/works'

export const Cards = () => {
	const { currentWork, setCurrentWork } = useWorks();

	return (
		<div className="cards-wrapper">
			<Card 
				setCurrentWork={setCurrentWork} 
				currentWork={currentWork}
				src="static/components/landing/devices/m2b.gif"
				work="m2b"
				description="Brazilian Real Estate"
				path={`https://generativa.io/#/m2b`}
			/>
			<Card 
				setCurrentWork={setCurrentWork} 
				currentWork={currentWork}
				src="static/components/landing/devices/jukka.gif"
				work="jukka"
				description="Zone representation"
				path={`${window.location.origin}/#/parcels`}
			/>
			<Card 
				setCurrentWork={setCurrentWork} 
				currentWork={currentWork}
				src="static/components/landing/devices/airbnb.png"
				work="airbnb"
				description="Airbnb Metrics"
				path={`https://ugeom.com/`}
			/>
		</div>
	)
}

Cards.displayName="Cards";