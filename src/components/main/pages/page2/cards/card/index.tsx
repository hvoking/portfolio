// App imports
import './styles.scss';

// Context imports
import { useScroll } from '../../../../../context/scroll';

export const Card = ({ currentWork, setCurrentWork, path, work, src, description }: any) => {
	const { scrollToSection, currentSection } = useScroll();

	const onClick = () => {
		setCurrentWork(work)
		currentSection === "page1" && scrollToSection("page2")
	}

	const getOpacity = () => {
		if (currentSection === "page1") return "1"
		return currentWork === work ? "1" : "0.5"
	}
	return (
		<div className="card-wrapper" onClick={onClick}>
			<div className="card-title">
				<div style={{display: "flex", justifyContent: "space-between"}}>
					<div 
						className="pages-description" 
						style={{color: "rgba(255, 255, 255, 1)", opacity: getOpacity(), paddingTop: "5px", paddingBottom: "5px"}}
					>
						{description}
					</div>
					{currentWork === work && <img 
						src={process.env.PUBLIC_URL + "/static/extra/redirect_white.svg"} 
						width="15px" 
						alt="redirect"
						onClick={() => window.open(path)}
					/>}
				</div>
			</div>
			<img 
				className="card-thumbnail" 
				src={src} 
				alt={work}
				style={{opacity: getOpacity()}}
			/>
			{currentWork === work && <div className="card-background"/>}
		</div>
	)
}

Card.displayName="Card";