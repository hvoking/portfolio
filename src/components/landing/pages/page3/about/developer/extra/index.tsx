// App imports
import { CancelCross } from '../../../../utils/cross';
import './styles.scss';

export const ExtraTools = ({ setExtraTools }: any) => {
	const onClick = () => setExtraTools(false);

	return (
		<div className="extra-tools-wrapper">
			<div onClick={onClick}></div>
			<div className="extra-tools">
				<CancelCross onClick={onClick}/>
				<div className="extra-tool-title">
					Parametric Web Apps
				</div>
				<div className="extra-tools-images">
					<div className="extra-tool-item">
						<div className="extra-tool-header">
							<div className="extra-tool-subtitle">
								Business Cluster
							</div>
							<img 
								src="static/components/landing/extra/redirect.svg" 
								width="15px" 
								alt="redirect"
								onClick={() => window.open(`${window.location.origin}/#/business`)}
							/>
						</div>
						<img 
							src="static/components/landing/extra/0.jpg" 
							alt="business" 
							width="100%"
							onClick={() => window.open(`https://ugeom.com/`)}
						/>
						<div>
							Clusters of Santa Catarina's business landscape,
							offering insights into regional commerce.
						</div>
					</div>
					<div className="extra-tool-item">
						<div className="extra-tool-header">
							<div className="extra-tool-subtitle">
								Serverless Geometry
							</div>
							<img 
								src="static/components/landing/extra/redirect.svg" 
								width="15px" 
								alt="redirect"
								onClick={() => window.open(`https://hvoking.github.io/geometry/`)}
							/>
						</div>
						<img 
							src="static/components/landing/extra/1.jpg" 
							alt="geometry-app" 
							width="100%"
							onClick={() => window.open(`https://hvoking.github.io/geometry/`)}
						/>
						<div>Static Website, built entirely with JavaScript and powered by Three.js.</div>
					</div>
					<div className="extra-tool-item">
						<div className="extra-tool-header">
							<div className="extra-tool-subtitle">
								ML Price Predictor
							</div>
							<img 
								src="static/components/landing/extra/redirect.svg" 
								width="15px" 
								alt="redirect"
								onClick={() => window.open(`${window.location.origin}/#/predictor`)}
							/>
						</div>
						<img 
							src="static/components/landing/extra/2.jpg" 
							alt="predictor" 
							width="100%"
							onClick={() => window.open(`${window.location.origin}/#/predictor`)}
						/>
						<div>Machine Learning to forecast property values based on neighborhood data.</div>
					</div>
					<div className="extra-tool-item">
						<div className="extra-tool-header">
							<div className="extra-tool-subtitle">
								Real Estate Demo
							</div>
							<img 
								src="static/components/landing/extra/redirect.svg" 
								width="15px" 
								alt="redirect"
								onClick={() => window.open(`https://hvoking.github.io/demo/`)}	
							/>
						</div>
						<img 
							src="static/components/landing/extra/3.jpg" 
							alt="real-estate-x" 
							width="100%"
							onClick={() => window.open(`https://hvoking.github.io/demo/`)}
						/>
						<div>Real Estate Platform Demo, intuitive listings and visualizations.</div>
					</div>
				</div>
			</div>
			<div onClick={onClick}></div>
		</div>
	)
}

ExtraTools.displayName="ExtraTools";