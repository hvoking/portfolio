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
								src={process.env.PUBLIC_URL + "/static/extra/redirect.svg"} 
								width="15px" 
								alt="redirect"
								onClick={() => window.open(`https://hvoking.github.io/cnpj/`)}
							/>
						</div>
						<img 
							src={process.env.PUBLIC_URL + "/static/extra/0.jpg"} 
							alt="business" 
							width="100%"
							onClick={() => window.open(`https://hvoking.github.io/cnpj/`)}
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
								src={process.env.PUBLIC_URL + "/static/extra/redirect.svg"} 
								width="15px" 
								alt="redirect"
								onClick={() => window.open(`https://hvoking.github.io/geometry/`)}
							/>
						</div>
						<img 
							src={process.env.PUBLIC_URL + "/static/extra/1.jpg"} 
							alt="geometry-app" 
							width="100%"
							onClick={() => window.open(`https://hvoking.github.io/geometry/`)}
						/>
						<div>Static Website, built entirely with JavaScript and powered by Three.js.</div>
					</div>
					<div className="extra-tool-item">
						<div className="extra-tool-header">
							<div className="extra-tool-subtitle">
								Airbnb Metrics V2
							</div>
							<img 
								src={process.env.PUBLIC_URL + "/static/extra/redirect.svg"} 
								width="15px" 
								alt="redirect"
								onClick={() => window.open(`https://hvoking.github.io/airbnb/`)}
							/>
						</div>
						<img 
							src={process.env.PUBLIC_URL + "/static/extra/2.jpg"} 
							alt="airbnb-metrics" 
							width="100%"
							onClick={() => window.open(`https://hvoking.github.io/airbnb/`)}
						/>
						<div>Analytics platform utilizing Airbnb data to understand market trends.</div>
					</div>
					<div className="extra-tool-item">
						<div className="extra-tool-header">
							<div className="extra-tool-subtitle">
								Real Estate Demo
							</div>
							<img 
								src={process.env.PUBLIC_URL + "/static/extra/redirect.svg"} 
								width="15px" 
								alt="redirect"
								onClick={() => window.open(`https://hvoking.github.io/demo/`)}	
							/>
						</div>
						<img 
							src={process.env.PUBLIC_URL + "/static/extra/3.jpg"} 
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