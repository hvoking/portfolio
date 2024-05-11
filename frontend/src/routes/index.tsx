// Routes
import { Landing } from '../components/landing';
import { Main } from '../components/main';
import { Business } from '../components/business';
import { Predictor } from '../components/predictor';

// Third party imports
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export const PortfolioRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Landing/>}/>
				<Route path='/parcel-analyzer' element={<Main/>}/>
				<Route path='/business' element={<Business/>}/>
				<Route path='/predictor' element={<Predictor/>}/>
			</Routes>
		</Router>
	)
}

PortfolioRoutes.displayName="PortfolioRoutes"